const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req, res) =>{
    res.send("Welcome to our online shop api")
})

app.get("/products",(req, res) =>{
    res.send([2,4,3,5]);
})


const port = process.env.PORT || 5000

app.listen(port,console.log(`Server running on port ${port}`));