/// MC.js   stands for mongoose connection ///

const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/SignUp_form",{
    useNewUrlParser:true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('error',()=>console.log("error in connecting with database"))
db.once('open',()=>console.log("connected with database"))