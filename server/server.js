const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const AdminRegion = require("./models/AdminRegion");
const CivilRegion = require("./models/CivilRegion");
const cors = require("cors");
const connectDB = require("./db");
const data_set = require("./data-set");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/map", express.static(path.join(__dirname, "public")));

app.use("/try-db", (req, res) => {
    console.log("Try");
    data_set.civilian_sites.forEach((item) => {
        const region = new CivilRegion({
            number: item.number,
            owner: {
                name: item.owner.name,
                alive: item.owner.alive,
            },
            tl_coords: {
                x: item.left_arc.x,
                y: item.left_arc.y,
            },
            free: item.owner.name.length < 1,
        });

        region.save();
    });
});

app.get("/get-regions", async (req, res) => {
    console.log("get regions");
    const civilian_sites = await CivilRegion.find({});
    const admin_sites = await AdminRegion.find({});

    res.status(200).json({ civilian_sites, admin_sites });
});

if (process.env.NODE_ENV === "production") {
    console.log("production");

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`Server is running.. on Port ${PORT}`);
});

//

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
