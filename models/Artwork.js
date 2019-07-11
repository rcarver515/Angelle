const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const ArtworkSchema = new Schema({
    artImg:{
        type:String,
        required:true,
    },
    artImgTitle:{
        type:String,
        required:true,
    },
    artImgDimensions:{
        type:String,
        required:true,
    },
    artPrice:{
        type:Number,
        required:true,
    }
      
    }
);
module.exports=mongoose.model("Artworks",ArtworkSchema);
