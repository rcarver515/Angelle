const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const JewelrySchema = new Schema({
    img:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    dimensions:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    }
      
    }
);
module.exports=mongoose.model("Jewelries",JewelrySchema);
