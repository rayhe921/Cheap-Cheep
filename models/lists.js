const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    listName: {
        type: String,
        required: true,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Lists"
    // },
    Item: [ItemSchema],
})
const List = mongoose.model("List", ListSchema);

module.exports = List;

