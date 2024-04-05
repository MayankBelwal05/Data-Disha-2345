const express = require("express")
const { UserModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { blacklist } = require("../model/blacklist.model")
const userRouter = express.Router()

userRouter.post("/register", (req, res) => {
	const { username, email, password, age, city, role, interest } = req.body
	try {
		bcrypt.hash(password, 5, async (err, hash) => {
			if (err) {
				res.status(400).json({ err })
			} else {
				const user = new UserModel({ username, email, password: hash, age, city, role, interest })
				await user.save()
				res.status(200).send({ msg: "The user has been sucessfully registered" })
			}
		})
	} catch (err) {
		res.status(400).json({ err })
	}
})


userRouter.post("/login", async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await UserModel.findOne({ email })
		if (user) {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					res.status(200).send({ msg: "Login Sucessfull", user, "token": jwt.sign({ userID: user._id, username: user.username, role: user.role }, "masai") })
				} else {
					res.status(200).send({ msg: "wrong password" })
					console.log(err)
				}
			})
		} else {
			res.status(200).send({ msg: "Wrong Credential" })
		}
	}
	catch (err) {
		res.status(400).json({ err })
	}
})

userRouter.get("/logout", (req, res) => {
	const token = req.headers.authorization;
	try {
		blacklist.push(token)
		res.status(200).json({ msg: "You have been logged out!" })
	}
	catch (err) {
		res.status(400).json({ err })
	}

});

// Route for getting a user by their ID
userRouter.get("/:id", async (req, res) => {
	const userId = req.params.id;
  
	try {
	  // Find user by ID
	  const user = await UserModel.findById(userId);
  
	  if (!user) {
		return res.status(404).json({ error: "User not found" });
	  }
  
	  res.status(200).json(user);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: "Server error" });
	}
  });

module.exports = {
	userRouter
}