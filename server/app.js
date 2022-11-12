const express=require("express")
const app=express()
const cors = require('cors');

const userrouter=require("./users")
app.use(cors({ origin: true }));
app.use(express.json())
app.use("/users",userrouter)
app.use("/",(req,res)=>{
    res.send("Hi SocialMedia server is running here")
})

app.listen(4000,()=>{
    console.log("serer is running on port 4000")
})