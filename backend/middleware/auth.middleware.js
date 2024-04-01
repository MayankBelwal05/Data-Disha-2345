const jwt = require("jsonwebtoken")
const { blacklist } = require("../model/blacklist.model")
const { userModel } = require("../model/user.model")



const auth = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1]
	if (token) {
		if (blacklist.includes(token)) {
			res.json({ msg: "Please login to access" })
			return
		}
		jwt.verify(token, "masai", (err, decoded) => {
			if (decoded) {
				console.log(decoded)
				const { userID, username } = decoded;
				// const user = userModel.findOne({_id:userID})

				req.username = username;
				req.userID = userID;

				console.log("User ID:", userID);
				console.log("Username:", username);

				next()
			} else {
				res.json({ err })
			}
		})
	} else {
		res.json({ msg: "You are not authorized for this page" })
	}
}

module.exports = {
	auth
}