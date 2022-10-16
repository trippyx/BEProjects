const mongo = require("mongoose")
// const db = mongo.connect("mongodb+srv://admin:8894910713@main.dns1hyd.mongodb.net/?retryWrites=true&w=majority",(error,result)=>{
//     if (!error){
//         console.log("Database connected")
//     }else{
//         console.log("error",error)
//         process.exit()
//     }
// })
exports.connectDatabase = connectDatabase;

async function connectDatabase() {
    try {
        const db = await mongo.connect('mongodb+srv://admin:8894910713@main.dns1hyd.mongodb.net/?retryWrites=true&w=majority');
        console.log('database connected');
        return db;
    } catch (error) {
        console.log('database error', error);
        process.exit(1);
    }
}