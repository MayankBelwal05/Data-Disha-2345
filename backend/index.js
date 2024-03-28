const express = require("express")
require("dotenv").config()
const { connection } = require("./config/db")
const { userRouter } = require("./router/user.route")
const {auth} = require("./middleware/auth.middleware")


const app = express() 
app.use(express.json())

app.use("/users", userRouter)

app.get("/", (req, res) => {
	res.json({ msg: "this is homepage" })
})


app.get("/admin",auth ,(req, res) => {
	res.json({ msg: "this is Admin page" })
})

app.listen(process.env.PORT, async () => {
	try {
		await connection
		console.log("Connect to mongoDB")
		console.log("Server is running at port 8080")
	}
	catch (err) {
		console.log(err)
	}
})