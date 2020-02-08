var cheerio = require("cheerio");
const puppeteer = require('puppeteer');

module.exports = {
    scrapeWalmart: function (req, res) {

        //Set up the URL to search on walmart by adding the search term. Puppeteer is smart and will understand spaces.
        var url = "https://www.walmart.com/search/?query=" + req.searchTerm;
        var firstMatch = {};

        //Launch puppeteer
        puppeteer.launch().then(function (browser) {
            return browser.newPage();
        })
            .then(function (page) {
                return page.goto(url).then(function () {
                    return page.content();
                })
            })
            .then(function (html) {
                var $ = cheerio.load(html);
                var productNames = [];
                var productPrices = [];
                var productLinks = [];

                $(".price-main").each(function (i, element) {
                    var price = $(element).children().first().text();


                    // push each price into the productPrices array
                    productPrices.push(price);
                });

                $(".product-title-link").each(function (i, element) {
                    var link = "walmart.com"
                    link += $(element).attr("href");;

                    var name = $(element).children().first().next().text();

                    if (name === '') {
                        name = $(element).children().first().text();
                    }

                    // push each link into the productLinks array
                    productLinks.push(link);
                    productNames.push(name);
                });

                firstMatch.name = productNames[0];
                firstMatch.price = productPrices[0];
                firstMatch.link = productLinks[0];
            })
            .then(function () {
                res.json(firstMatch);
            })

    }
};