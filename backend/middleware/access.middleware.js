const access = (...permittedRoles) => {
	return (req, res, next) => {
		console.log(req.role);
		if (permittedRoles.includes(req.role)) {
			next()
		} else {
			res.json({ msg: "You have no access" })
		}
	}
}

module.exports = {
	access
}