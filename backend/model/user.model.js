const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	age: { type: Number, required: true },
	city: { type: String, required: true },
	role: {
		type: String,
		enum: ["user", "organizer", "admin"],
		default: "user"
	},
	interests: {
		type: String,
		enum: ["Music", "Sports", "Dance", "Cultural", "Arts", "Live-Concert", "Versatile"],
		default: "Versatile"
	}
}, {
	versionKey: false
})
const userModel = mongoose.model("user", userSchema)

module.exports = {
	userModel
}