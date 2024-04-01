const express = require("express")
require("dotenv").config()
const { connection } = require("./config/db")
const { userRouter } = require("./router/user.route")
const { eventRouter } = require("./router/event.route")
const {auth} = require("./middleware/auth.middleware")
const cors = require("cors")
const { messageRouter } = require("./router/message.route")

const app = express() 
app.use(express.json())
app.use(cors())

//routes

app.use("/users", userRouter)
app.use("/events", eventRouter)
app.use("/message", messageRouter)


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