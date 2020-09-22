const { Router } = require("express");
const router = Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./../../middlwares/auth");

router.post("/", async (req, res) => {
    const { nickname, password } = req.body;

    //Simple validation
    if (!nickname || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    //Check for existing user
    const user = await User.findOne({ nickname });
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
            console.log("Fail");
            return res.status(400).json({ msg: "Invalid credentials!" });
        }

        jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: "365d" },
            async (err, token) => {
                if (err) throw err;

                res.status(200).json({
                    token,
                    user: {
                        nickname: user.nickname,
                        email: user.email,
                    },
                });
            }
        );
    });
});

router.get("/user", auth, (req, res) => {
    User.findById(req.user.id)
        .select("-password")
        .then((user) => res.json(user));
});

module.exports = router;
