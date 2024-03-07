const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;

//connect to mongodb
mongoose.connect("mongodb+srv://sarikasubramaniyan:donation@cluster0.skxexrj.mongodb.net/test",)
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});
//data schema
const donatesSchema = {
    amount: Number,
    Location: String,
    donorName: String

}
//data model
const donate = mongoose.model("donate",donatesSchema);
//read route
app.get("/donates", (req, res)=> {
    donate.find()
     .then((donates) => res.json(items))
     .catch((err) => res.status(400).json("Error:" + err));
});

//create route

//delete route

//update route


app.listen(port,function() {
    console.log("server is running on 3000");

});
