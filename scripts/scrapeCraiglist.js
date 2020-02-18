var cheerio = require("cheerio");
var axios = require("axios");

function scrapeCraiglist(searchTerm) {
  var searchTerm = "watch"
  var firstMatch = {};

  var url = "https://seattle.craigslist.org/search/sss?query=" + searchTerm + "&sort=rel";
  console.log("this is working")
  axios.get(url).then(function (response) {
    var $ = cheerio.load(response.data);
    var productNames = [];
    var productPrices = [];
    var productLinks = [];
   var image =[];
  

    $(".result-title").each(function (i, element) {
      productLinks = $(element).attr("href");
      productNames= $(element).text();
      // console.log(productLinks)
      // console.log(productNames)


    })
    $(".result-price").each(function (i, element) {
      productPrices = $(element).text();
      // console.log(productPrices)

    })
    $("img").each(function (i, element) {
      image =$(element).attr("src")
      // console.log(image)

    })
    firstMatch.name = productNames;
    firstMatch.price = productPrices;
    firstMatch.link = productLinks;
    firstMatch.image = image;


  })
  .then(function () {
    console.log(firstMatch);    
    return firstMatch
  })
}

exports.scrapeCraiglist = scrapeCraiglist;
