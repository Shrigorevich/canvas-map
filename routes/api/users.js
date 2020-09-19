const { Router } = require("express");
const router = Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    console.log("Register");

    const { nickname, email, password } = req.body;
    //Simple validation
    if (!nickname || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields!" });
    }

    //Check for existing user
    const existingUser = await User.findOne({ nickname });
    if (existingUser) {
        console.log("User already exist");
        return res.status(400).json({
            msg: "User already exists. Nickname must be unique!",
        });
    }

    const user = new User({
        nickname,
        email,
        password,
    });
    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user.save().then((user) => {
                //Create token
                jwt.sign(
                    { id: user.id },
                    process.env.jwtSecret,
                    { expiresIn: "30d" },
                    (err, token) => {
                        if (err) throw err;
                        res.status(201).json({
                            token,
                            user: {
                                id: user.id,
                                email: user.email,
                                nickname: user.nickname,
                            },
                            msg: "User created!",
                        });
                    }
                );
            });
        });
    });
});

module.exports = router;
