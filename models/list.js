const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    listName :{
        type: String,
        required: true,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
   //need to create item of array //
})
const List = mongoose.model( "List", ListSchema);

module.exports = List;
