const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const AdminRegion = require("./models/AdminRegion");
const CivilRegion = require("./models/CivilRegion");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/map", express.static(path.join(__dirname, "public")));

app.use("/regions", require("./api/regions"));

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
//     name: item.name,
//     tla_coords: {
//         x: item.left_arc.x,
//         y: item.left_arc.y,
//     },
//     width: item.width,
//     height: item.height,
//     color: item.color,
// });
