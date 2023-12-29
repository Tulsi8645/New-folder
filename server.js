const express=require("express")
const app=express()
//routes
app.get('/',(req,res)=>{
    res.send("hello Node api")
})





app.listen(4000,()=>{
    console.log("Node api is running on port 4000")
})