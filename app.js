const express = require('express');
const userRouter = require("./routes/user.routes.js")
const app = express();
const dotenv = require("dotenv")
dotenv.config()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('server is running')
})