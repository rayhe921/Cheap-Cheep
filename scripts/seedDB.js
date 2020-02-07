const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CheapCheep"
);

const ItemSeed = [
  {
    name: "iphone 8 plus",
    description:
      "iPhone 8 Plus is a new generation of iPhone. Designed with the most durable glass ever in a smartphone and a stronger aerospace grade aluminum band. Charges wirelessly. Resists water and dust. 5.5-inch Retina HD display with True Tone. 12MP dual cameras offer improved Portrait mode and new Portrait Lighting. Powered by A11 Bionic, the most powerful and smartest chip ever in a smartphone. Supports augmented reality experiences in games and apps. With iPhone 8 Plus, intelligence has never looked better..",
      price: 550,
      website: "Amazon.com",
      link:"https://www.amazon.com/Apple-iPhone-Plus-Fully-Unlocked/dp/B07757LZ1J/ref=sr_1_3?keywords=iphone+8+plus&qid=1580628043&sr=8-3",
seacrhTerm : "iphone 8 plus"
  },
  {
    name: "iphone 8",
    description:
      "iPhone 8 is a new generation of iPhone. Designed with the most durable glass ever in a smartphone and a stronger aerospace grade aluminum band. Charges wirelessly. Resists water and dust. 5.5-inch Retina HD display with True Tone. 12MP dual cameras offer improved Portrait mode and new Portrait Lighting. Powered by A11 Bionic, the most powerful and smartest chip ever in a smartphone. Supports augmented reality experiences in games and apps. With iPhone 8 Plus, intelligence has never looked better..",
      price: 500,
      website: "Amazon.com",
      link:"https://www.amazon.com/Apple-iPhone-Plus-Fully-Unlocked/dp/B07757LZ1J/ref=sr_1_3?keywords=iphone+8+plus&qid=1580628043&sr=8-3",

  }, 
  
 
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(ItemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
