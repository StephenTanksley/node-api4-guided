const express = require("express")

const app = express()
const host = "127.0.0.1"
const port = 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",

		//this is so we don't have to hard-code an API key or some value into our code. It will respond to its environment.
		cohort: process.env.COHORT
	})
	console.log(process.env)
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})