const express = require("express");
const app = express()
app.use(express.json())

app.get('/hello',(req,res)=>{
    console.log(req.query)
    res.send({data : [{'book':'HelloWorld'}], success_s : 200, message: "Successs"})
});
app.post('/hello',(req,res)=>{
    console.log(req.query)
    res.send({data : [{'book':'HelloWorld'}], success_s : 200, message: "Success"})
});
app.listen(process.env.PORT,()=>{
    console.log('Api hit recived')
    console.log('server started');
});