const jwt = require("jsonwebtoken")
const { blacklist } = require("../model/blacklist.model")

const auth = (req, res, next) => {
	const token = req.headers.authorization
	if (token) {
		if(blacklist.includes(token)){
			res.json({msg:"Please login to access"})
		}
		jwt.verify(token, "masai", (err, decoded) => {
			if (decoded) {
				console.log(decoded)
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