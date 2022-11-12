const fs=require("fs")
const express=require("express")
const res = require("express/lib/response")
const file="database.json"
const router=express.Router()
function getusers(){
    const data=JSON.parse(fs.readFileSync(file))
    console.log("data is ",data)
    return data
}
function adduser(newuser){
    const data=JSON.parse(fs.readFileSync(file))
    const users=data["users"]
    users.push(newuser)
    console.log("new users are",users)
    data["users"]=users 
    fs.writeFileSync(file,JSON.stringify(data))
    console.log("added user to db  successfully")
    console.log("user is ",newuser)
    return true
}
module.exports={getusers,adduser}