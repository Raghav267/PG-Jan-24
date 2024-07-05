const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const productRoutes = require("./routes/ProductRoutes");


mongoose.connect("mongodb://127.0.0.1:27017/jan-mar")
    .then(() => {
        console.log("DB coneected Succefully!!!!")
    })
    .catch((err) => {
        console.log(err);
    })

app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({
    extended: true
}));

app.use(productRoutes);

app.listen(3000, () => {
    console.log("Server start at port 3000!!!!");
})