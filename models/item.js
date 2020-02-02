const mongoose = require("mongoose");

const Schema = moongose.Schema;
  
const ItemSchema = new Schema({
    name:{
        type: String,
        reuired: true,
        trim :true,
    },
    price: {
      type: Number,
       min:[1, "price is require"] ,
       max : [255]
    },
    website:{
        type: String,
        reuired: true,

    },
    link :{
        type: Boolean,
        reuired: true,

    }
})
  const Item = moongose.model("Item", ItemSchema)
  module.exports = Item;
