const express = require("express");
const app_drill = express();
app_drill.set("view engine", "ejs");

app_drill.use('/static', express.static('static'));

const port = 8000;

app_drill.get("/", (req, res)=>{
    res.render('index_drill');
});

app_drill.get("/backup", (req, res)=>{
    res.render('backup');
})



app_drill.get("/datasheet", (req, res)=>{
    var pie = String(3.14159265358979323846264338327950288419716939937510582097494);
    
    res.render('data-sheet', {spie: pie});
})


app_drill.listen(port, ()=>{
    console.log("server open: ", port);
});


