const express = require("express");
const app = express();
app.set("view engine", "ejs");

// app.use( express.static( "public" )) ;
// app.use( '/static', express.static( 'public'));
app.use( '/static', express.static( 'static'));
const port = 8000;
// ip:8000 localhost:8000
// function(){}
// ()=>{}
// function(req, res){}
// request, response
app.get("/", (req,res)=>{
    // res.send("hello express");
    // res.sendFile(__dirname+"/test.html");
    // res.render('index');
    
    var person = [
        {"name":"김소연","gender":"여자"},
        {"name":"홍길동","gender":"남자"}
    ]
    res.render('index', {per: person});
    // 변수 만들어서 다른 문서로 넘기는 방법
})

// localhost:8000/test
app.get("/test", (req,res)=>{
    res.render("test1");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})
