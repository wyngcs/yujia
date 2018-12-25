const express=require("express");
const bodyParser=require("body-parser");
const myproRouter=require("./routes/mypro.js");
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
 extended:false
}));
app.use(express.static("mypro"));
app.use("/mypro",myproRouter);