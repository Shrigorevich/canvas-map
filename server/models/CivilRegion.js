const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const UserSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    owner: { type: {}, required: false },
    tl_coords: {
        type: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        required: true,
    },
    tr_coords: {
        type: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        required: false,
    },
    br_coords: {
        type: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        required: false,
    },
    bl_coords: {
        type: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        required: false,
    },
    free: { type: Boolean, required: true },
});

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = mongoose.model("Civil_Region", UserSchema);
