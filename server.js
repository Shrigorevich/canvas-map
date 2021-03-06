const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const AdminRegion = require("./models/AdminRegion");
const CivilRegion = require("./models/CivilRegion");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
connectDB();

//app.use(cors());
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
        optionsSuccessStatus: 200,
    })
);
app.use(express.json({ extended: true }));
app.use("/map", express.static(path.join(__dirname, "public")));
app.use("/regions", require("./routes/regions"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

if (process.env.NODE_ENV === "production") {
    console.log("production");

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        console.log(path.resolve(__dirname, "client", "build", "index.html"));
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`Server is running.. on Port ${PORT}`);
});

// const region = new AdminRegion({
//     name: item.name,
//     tla_coords: {
//         x: item.left_arc.x,
//         y: item.left_arc.y,
//     },
//     width: item.width,
//     height: item.height,
//     color: item.color,
// });
