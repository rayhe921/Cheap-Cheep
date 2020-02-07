const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user collection and inserts the books below

mongoose.connect( process.env.MONGODB_URI ||"mongodb://localhost/CheapCheep" , () => {
  console.log('connecting to database')
})

// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}).then(() => {
//   console.log('connecting to database')
// }).catch((err) => {
//   console.log(err)
// })

const userSeed = [
  {
    userName: "rayhe",
    password: "123456"
  }
]

const userSeed = [
  {
    userName : "shree",
    password : "12345",
    email : " shre@yahoo.com"
  }
]
const ItemSeed = [
  {
    name: "iphone 8 plus",
      price: 550,
      website: "Amazon.com",
      link:"https://www.amazon.com/Apple-iPhone-Plus-Fully-Unlocked/dp/B07757LZ1J/ref=sr_1_3?keywords=iphone+8+plus&qid=1580628043&sr=8-3",
seacrhTerm : "iphone 8 plus"
  },
  {
    name: "iphone 8",
      price: 500,
      website: "Amazon.com",
      link:"https://www.amazon.com/Apple-iPhone-Plus-Fully-Unlocked/dp/B07757LZ1J/ref=sr_1_3?keywords=iphone+8+plus&qid=1580628043&sr=8-3",

  }, 
  
 
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Item
//   .remove({})
//   .then(() => db.Item.collection.insertMany(ItemSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
