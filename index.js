const express = require("express");
const mongoose = require("mongoose");
const { route } = require("./Routers/user");
const user = require("./Routers/user");
mongoose.connect("mongodb://localhost:27017/MyServer",()=> {
    console.log("server connected");
});

const app = express();
app.use(express.json());


app.post("/user", async (req,res)=>{
    const user = await User.create({
    Name : req.body.Name,
    Age : req.body.Age,
    Address : req.body.Address,
    Phone_number : req.body.Phone_number
    });
    res.send({
        user,
        message : "user_created"
    });

});

app.use("/user",user)
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(9000,()=>{
    console.log("server start at 9000")
})