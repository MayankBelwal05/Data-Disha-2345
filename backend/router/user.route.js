const express = require("express")
const { userModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { blacklist } = require("../model/blacklist.model")
const userRouter = express.Router()

userRouter.post("/register", (req, res) => {
	const { username, email, password, age, city, role, interests } = req.body
	try {
		bcrypt.hash(password, 5, async (err, hash) => {
			if (err) {
				res.status(400).json({ err })
			} else {
				const user = new userModel({ username, email, password: hash, age, city, role, interests })
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
		const user = await userModel.findOne({ email })
		if (user) {
			bcrypt.compare(password, user.password, async (err, result) => {
				if (result) {
					res.status(200).send({ msg: "Login Sucessfull", "token": jwt.sign({ day4: "level2" }, "masai") })
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
	const token = req.headers.authorization?.split(" ")[1]
	try {
		blacklist.push(token)
		res.status(200).json({ msg: "You have been logged out!" })
	}
	catch (err) {
		res.status(400).json({ err })
	}

})

module.exports = {
	userRouter
}