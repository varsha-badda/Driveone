const express = require('express');
const userRouter = require("./routes/user.routes.js")
const app = express();

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(3000,()=>{
    console.log('server is running')
})