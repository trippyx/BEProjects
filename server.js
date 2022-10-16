const express = require("express");
const dbfile = require("./database.js")
let models = require('./models');
const testModel = models.testModel.testModel;
const bookModel = models.booksModel.booksModel;
const app = express()
const port_number = process.env.PORT || 6000;
app.use(express.json())

app.get('/hello', async(req, res) => {
    try{
    console.log(req.query)
    const condition = {};
    if(req.query.id){
        condition._id = req.query.id;
    }
    const result = await testModel.find(condition);
    res.send({ data: result, success_s: 200, message: "Successs" });
    }catch(error){
        console.log('error',error);
        res.send({ data: {}, success_s: 400, message: "Error" });
    }
});
app.post('/hello', async (req, res) => {
    try{
    console.log(req.body);
    const result = await testModel.create({size: req.body.size, name: req.body.name});
    res.send({ data: result, success_s: 200, message: "Success123" });
    }catch(error){
        console.log('error',error);
        res.send({ data: {}, success_s: 400, message: "Error" });
    }
});

app.get('/books', async(req, res) => {
    try{
    console.log(req.query)
    const condition = {};
    if(req.query.id){
        condition._id = req.query.id;
    }
    if(req.query.min_price){
        condition.price = {
            $gte: parseInt(req.query.min_price)
        }
    }
    const result = await bookModel.find(condition);
    res.send({ data: result, success_s: 200, message: "Successs" });
    }catch(error){
        console.log('error',error);
        res.send({ data: {}, success_s: 400, message: "Error" });
    }
});
app.post('/book', async (req, res) => {
    try{
    console.log(req.body);
    const result = await bookModel.create({price: req.body.price, name: req.body.name});
    res.send({ data: result, success_s: 200, message: "Success123" });
    }catch(error){
        console.log('error',error);
        res.send({ data: {}, success_s: 400, message: "Error" });
    }
});
// app.post('/hello', (req, res) => {
//     console.log(req.body)
//     res.send({ data: [{ 'book': 'HelloWorld' }], success_s: 200, message: "Success321" })
// });
app.listen(port_number, async () => {
    const database = await dbfile.connectDatabase();
    global.database = database;
    console.log('Api hit recived')
    console.log('server started');
});