const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
let items=[];
let workItems=[];


app.get("/", (req, res)=>{
    let day = date.getDate();
    res.render('list', {listTitle: day, newListItem:items})
})
app.post('/',(req,res)=>{
    
    newItem = req.body.newItem;
    if(req.body.list ==="Work")
    {
        workItems.push(newItem)
        res.redirect('/work')
    }
    else{
        items.push(newItem);
        res.redirect("/")
    }
    
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/work", (req,res)=>{
    res.render('list', {listTitle: "Work List", newListItem:workItems})
})
app.post('/work',(req,res)=>{
    newItem = req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work")
})

