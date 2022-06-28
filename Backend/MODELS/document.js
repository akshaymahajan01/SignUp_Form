const mongoose =  require("mongoose")


const documentschema = new mongoose.Schema({

   username : {
    type : String,
    required:true
   },

   email : {
    type : String,
    required:true,
    unique:true
   },

   contact : {
       type : Number,
       required : true
   },

   date : {
         type : Date,
    default : Date.now
   },

    gender : {
           type : String ,
          required : true
    }
})


const document = new mongoose.model("Form_data",documentschema);

module.exports = document;