const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // ✅ LOAD FIRST

const connectToDB = require("./config/db");
const userRouter = require("./routes/user.routes.js");
const indexRouter = require('./routes/index.routes');
const fileRoutes = require('./routes/file.routes'); // ✅ ADD
const cookieParser = require('cookie-parser');

const app = express();

connectToDB(); 

app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/file', fileRoutes); // ✅ ADD

app.listen(3000, () => {
    console.log('server is running');
});
