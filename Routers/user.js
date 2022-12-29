const express = require("express");
const router = express.Router();
const User = require ("../Schema/user");


router.get("/",async(req,res)=>{
    const user = await User.find();
    res.send({
        user
    })
    
});
router.get("/:id",async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.send({
        user,
        message : "user data "
    });
});

router.delete("/:id",async(req,res)=>{
    const user = await User.findByIdAndRemove(req.params.id);
    res.send({
        message : "user data removed "
    });
});
router.put(":id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body
        );
    res.send({
        message : "user data updated "
    });
});


module.exports = router;