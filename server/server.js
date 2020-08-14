const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const AdminRegion = require("./models/AdminRegion");
const CivilRegion = require("./models/CivilRegion");

const cors = require("cors");
const connectDB = require("./db");

connectDB();

app.use(bodyParser.json());

const data_set = require("./data-set");

app.use("/map", express.static(path.join(__dirname, "public")));

app.get("/get-data", (req, res) => {
    console.log("GET DATA POINT");
    res.status(200).json(data_set);
});

app.use("/try-db", async (req, res) => {
    res.status(201).json({});
});

if (process.env.NODE_ENV === "production") {
    console.log("production");

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = 80;

app.listen(PORT, function () {
    console.log(`Server is running.. on Port ${PORT}`);
});

// const region = new AdminRegion({
//     number: item.number,
//     owner: {
//         name: item.owner.name,
//         alive: item.owner.alive,
//     },
//     tla_coords: {
//         x: item.left_arc.x,
//         y: item.left_arc.y,
//     },
//     width: item.width,
//     height: item.height,
// });

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
