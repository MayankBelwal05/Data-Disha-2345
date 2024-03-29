const jwt = require("jsonwebtoken")
const { blacklist } = require("../model/blacklist.model")



const auth = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1]
	if (token) {
		if(blacklist.includes(token)){
			res.json({msg:"Please login to access"})
		}
		jwt.verify(token, "masai", (err, decoded) => {
			if (decoded) {
				console.log(decoded)
				const { userID, username } = decoded; // Destructuring here

                // Now userID and username are available in this middleware function
                // You can use them as required
                console.log("User ID:", userID);
                console.log("Username:", username);

                // If you want to attach them to req.body (though it's not a recommended practice),
                // you can do so like this:
                req.body.userID = userID;
                req.body.username = username;
				
				// req.body.userID = decoded.userID;
				// req.body.username = decoded.username;
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