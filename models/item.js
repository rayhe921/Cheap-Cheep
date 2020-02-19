const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  
const ItemSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim :true,
    },
    price: {
      type: Number,
       min:[1, "price is require"] ,
       max : [255]
    },
    website:{
        type: String,
        required: true,

    },
    link: {
        type: String,
        required: true,

    },
    image: {
        type:String
    }
})
  const Item = mongoose.model("Item", ItemSchema)
  module.exports = Item;
