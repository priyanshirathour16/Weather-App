const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 8800;

// public static path need index file ka ----
const staticpath = (path.join(__dirname , "../public"));
const templates_path = (path.join(__dirname , "../templates/views"));
const partials_path = (path.join(__dirname , "../templates/partials"));

//using handles bar---
app.set('view engine' , "hbs");

// mera jo by default views folder tha ab vo template bna rhe hai ---
app.set('views' , templates_path);

// partials folder bhi use kar rhe hai ---
hbs.registerPartials(partials_path);
//mera jo aap hai vo static website ko use jarna chahe ga--
app.use(express.static(staticpath));

//routing---
app.get('/',(req , res)=>{
    res.render('index');
});

app.get('/about',(req , res)=>{
    res.render("about");
});

app.get('/weather',(req , res)=>{
    res.render('weather');
});

app.get('*',(req , res)=>{
    res.render('404error' , {
        errorMsg:"Opps! Page Not Found"
    });
});

app.listen(port , ()=>{
    console.log("server is runnig");
});