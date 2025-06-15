const express=require('express')
const userRouter = require('./routes/userRouter');
const app=express();
// middleware
app.use(express.json());


//routes
app.use("/api/v1/users",userRouter);




module.exports=app;