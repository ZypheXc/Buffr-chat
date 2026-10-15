const express = require('express');
const server = express()

server.get("/", (req, res) => {
    res.render("./temp.ejs")
})

server.listen(3000, () => {
    console.log("Listening bro.")
})