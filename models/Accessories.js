const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const AccessoriesSchema = new Schema({
    accImg:{
        type:String,
        required:true,
    },
    accTitle:{
        type:String,
        required:true,
    },
    accDimensions:{
        type:String,
        required:true,
    },
    accPrice:{
        type:Number,
        required:true,
    }
      
    }
);
module.exports=mongoose.model("Accessories",AccessoriesSchema);
