const jwt = require("jsonwebtoken");
const { blacklist } = require("../model/blacklist.model");

const auth = (req, res, next) => {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;
    // console.log(token);
    if (token) {
        if (blacklist.includes(token)) {
            console.log("Token blacklisted:", token);
            res.json({ msg: "Please login to access" });
            return;
        }
        jwt.verify(token, "masai", (err, decoded) => {
            if (err) {
                console.error("Error verifying token:", err);
                res.json({ msg: "Token verification failed" });
                return;
            }
            console.log("Decoded token:", decoded);
            const { userID, username, role } = decoded;
            req.username = username;
            req.userID = userID;
            req.role = role; // Assign role to req.role
            console.log("User ID:", userID);
            console.log("Username:", username);
            console.log("Role:", role);
            next();
        });
    } else {
        console.log("No token found in headers");
        res.json({ msg: "You are not authorized for this page" });
    }
};

module.exports = {
    auth
};
