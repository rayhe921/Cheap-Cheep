const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListsSchema = new Schema({
    listName :{
        type: String,
        required: true,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
   //need to create item of array //
})

const ListSchema = new Schema({
    listName :{
        type: String,
        required: true,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "Lists"
      },
      Item: [ItemSchema]
})
const List = mongoose.model( "List", ListSchema);


const List = mongoose.model( "Lists", ListsSchema);

module.exports = List;
module.exports = Lists;
