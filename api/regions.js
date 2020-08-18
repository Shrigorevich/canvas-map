const { Router } = require("express");
const router = Router();
const AdminRegion = require("../models/AdminRegion");
const CivilRegion = require("../models/CivilRegion");

const data_set = require("../data-set");

router.get("/get-regions", async (req, res) => {
    console.log("get regions");
    const civilian_sites = await CivilRegion.find({});
    const admin_sites = await AdminRegion.find({});

    res.status(200).json({ civilian_sites, admin_sites });
});

router.post("/create-region", async (req, res) => {
    const {
        number,
        owner,
        tl_coords,
        tr_coords,
        br_coords,
        bl_coords,
        description,
        for_sale,
    } = req.body.regionData;

    try {
        const region = new CivilRegion({
            number: Number(number),
            owner,
            tl_coords: {
                x: Number(tl_coords.split(" ")[0]),
                y: Number(tl_coords.split(" ")[1]),
            },
            tr_coords: {
                x: Number(tr_coords.split(" ")[0]),
                y: Number(tr_coords.split(" ")[1]),
            },
            br_coords: {
                x: Number(br_coords.split(" ")[0]),
                y: Number(br_coords.split(" ")[1]),
            },
            bl_coords: {
                x: Number(bl_coords.split(" ")[0]),
                y: Number(bl_coords.split(" ")[1]),
            },
            for_sale,
            description,
        });

        const doc = await region.save();
        console.log(doc);
        res.status(200).json({ status: "Success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Fail" });
    }
});

// router.get("/try-db", (req, res) => {
//     console.log("Try");
//     data_set.civilian_sites.forEach((item) => {
//         const region = new CivilRegion({
//             number: item.number,
//             owner: item.owner.name,
//             tl_coords: {
//                 x: item.left_arc.x,
//                 y: item.left_arc.y,
//             },
//             for_sale: item.owner.name.length < 1,
//         });

//         region.save();
//     });
// });

module.exports = router;
