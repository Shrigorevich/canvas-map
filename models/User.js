const { Schema, model, Types } = require("mongoose");
const timestamps = require("mongoose-timestamp");

const UserSchema = new Schema({
    nickname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: false },
    password: { type: String, required: true },
});

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = model("User", UserSchema);
