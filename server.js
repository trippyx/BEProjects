const express = require("express");
const app = express()

app.get('/hello',(req,res)=>{
    res.send('hello world')
});

app.listen(process.env.PORT,()=>{
    console.log('Api hit recived')
    console.log('server started');
});