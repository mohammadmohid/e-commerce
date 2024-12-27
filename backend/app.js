const express = require('express')
const {connectToMongoDB} = require("./config/mongodb.js")

const userroutes = require("./routes/userRoutes.js")
const categoryRoutes = require("./routes/categoryRoutes.js")
const productRoutes = require("./routes/productRoutes.js");

const app = express()
const port = 3000
connectToMongoDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", userroutes)
app.use("/categories", categoryRoutes)
app.use("/products", productRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  