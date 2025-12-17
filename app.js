const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // ✅ LOAD FIRST

const connectToDB = require("./config/db");
const userRouter = require("./routes/user.routes.js");


const app = express();

connectToDB(); 
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('server is running')
})