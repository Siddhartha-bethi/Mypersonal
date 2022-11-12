const express=require("express")
const router=express.Router()
const market=require("./market")
const { json } = require("express")
router.post("/adduser",(req,res)=>{
    const newuser=req.body 
    console.log("new users is ",newuser)
    const feed=market.adduser(newuser)
    if(feed){
        console.log("no prb faced in adding the users")
        res.send(true)
    }
    else{
        console.log("Facing some problem in adding the users")
        res.send(true)
    }
})
router.get("/getusers",(req,res)=>{
    const users=market.getusers()
    return users
})
module.exports=router