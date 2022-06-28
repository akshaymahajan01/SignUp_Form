const express = require("express")
const bodyparser = require("body-parser")
const  mongoose = require("mongoose")
const path = require("path")


const app = express();


require("./db/MC")
const document = require("./MODELS/document");
const bodyParser = require("body-parser");


const front_end = path.join(__dirname,"../public");
app.use(express.static(front_end));


app.use(bodyParser.json());
app.use(bodyparser.urlencoded({extended : true}));

 app.post("/Sign_Up", async(req,res)=>{
    try {
    
          const data = new document({
                 username : req.body.username,
                 email : req.body.email,
                 contact : req.body.contact,
                 date : req.body.date,
                 gender : req.body.gender
          })

            const result = await data.save();
            console.log(result);
            res.status(201).redirect('success.html')
     } catch (error) {
           res.status(404).send(error);
     }

 })

app.get('/',(req,res)=>{
     res.redirect('file.html');
})

app.listen(3000,()=>console.log("server started"))