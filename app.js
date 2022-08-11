const express = require("express");
const app = express();

const port = 8000;
// ip:8000
app.get("/", (req,res)=>{
    // res.send("hello express");
    res.sendFile(__dirname+"/test.html");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})