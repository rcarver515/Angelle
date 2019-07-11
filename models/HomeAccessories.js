const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const HomeAccessoriesSchema = new Schema({
    homeAccImg:{
        type:String,
        required:true,
    },
    homeAccTitle:{
        type:String,
        required:true,
    },
    homeAccDimensions:{
        type:String,
        required:true,
    },
    homeAccPrice:{
        type:Number,
        required:true,
    }
      
    }
);
module.exports=mongoose.model("HomeAccessories",HomeAccessoriesSchema);
