const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tla_coords: { type: {}, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    color: { type: String, required: false },
});

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = mongoose.model("Admin_Region", UserSchema);
