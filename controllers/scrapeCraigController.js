var cheerio = require("cheerio");
var axios = require("axios");


function scrapeCraiglist(searchTerm) {
  var searchTerm = "watch"
  var firstMatch = {};

  var url = "https://seattle.craigslist.org/search/sss?query=" + searchTerm + "&sort=rel";
  console.log("this is working")
  axios.get(url).then(function (response) {
    console.log(response.data);
    var $ = cheerio.load(response.data);
    var productNames = [];
    var productPrices = [];
    var productLinks = [];


    $(".result-title").each(function (i, element) {
      Link = $(element).attr("href");
      Name= $(element).text();
      // console.log(Link)
      // console.log(Name)
      productLinks.push(Link);
      productNames.push(Name);
    })
    $(".result-price").each(function (i, element) {
      Prices = $(element).text();
      //console.log(productPrices)
      productPrices.push(Prices);

    })
    //console.log($(".swipe-wrap").children().);
    $(".result-image").each(function (i, element) {
      // image = $(element).children().first().attr("src")
      const images = $("img", element);
      //console.log(images.length);

      // images.push(image);

    })
    //console.log(image);
    firstMatch.name = productNames[0];
    firstMatch.price = productPrices[0];
    firstMatch.link = productLinks[0];


  })
  .then(function () {
    console.log(firstMatch);    
    return firstMatch
  })
}

exports.scrapeCraiglist = scrapeCraiglist;