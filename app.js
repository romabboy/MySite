const express = require("express");
const app = express();
const menuRoter = require("./Route/menuRouter")
const postControll = require("./Route/postRouter")
const path = require("path");
const pathStaticFile = path.resolve(__dirname,"views","static");
const PORT = process.env.PORT || 80;

app.set("view engine","pug");

app.get("/robots.txt",(req,res)=>{

    res.sendFile(path.resolve(__dirname,"views","static","robots.txt"));
    res.status(200);

})


app.use(express.static(pathStaticFile))


app.use("/",menuRoter);

app.use(express.json());
app.use("/",postControll);


app.use("/notFound",function(req,res){
    
    res.status(404).render("notFound.pug");

})

app.use("*",function(req,res){

    res.redirect("/notFound")
    
})


app.listen(PORT)
