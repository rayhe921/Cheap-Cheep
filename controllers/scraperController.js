var cheerio = require("cheerio");
const puppeteer = require('puppeteer');

module.exports = {
    scrapeWalmart: function (req, res) {

        //Set up the URL to search on walmart by adding the search term. Puppeteer is smart and will understand spaces.
        var url = "https://www.walmart.com/search/?query=" + req.params.searchTerm;
        var firstMatch = {};

        function handlePage(page){

                //We only actually need the first result for each value, I grabbed all of the relevant ones to make the design extensible.
                var $ = cheerio.load(page);
                var productNames = [];
                var productPrices = [];
                var productLinks = [];
                var imageLinks = [];

                $(".search-result-productimage").each(function (i, element) {

                    var image = $(element).children().first().next().children().first().attr("src");
                    imageLinks.push(image);
                });

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

                    // push each link and name into the productLinks array
                    productLinks.push(link);
                    productNames.push(name);
                });

                //The returned object is the first match for each item
                firstMatch.name = productNames[0];
                firstMatch.price = productPrices[0];
                firstMatch.link = productLinks[0];
                firstMatch.image = imageLinks[0];

                console.log(firstMatch);
                res.json(firstMatch);

        }


        (async () => {
            console.log("start of aysnc");
            const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
            console.log("next is the try catch block");

            try {
                console.log("waiting on new page");
                const page = await browser.newPage();
                console.log("page is about to go to url");
                await page.goto(url);
                const content = await page.content();

                console.log("cheerio has page content");
                handlePage(content);
                
            } catch (error) {
               console.log(error);
            } finally {
                browser.close().catch( function(error) {
                    console.log(error);
                });
            }

        })();


        // //Launch puppeteer
        // puppeteer.launch({ args: ['--no-sandbox'] }).then(function (browser) {
        //     return browser.newPage();
        // })
        //     .then(function (page) {
        //         return page.goto(url).then(function () {
        //             return page.content();
        //         })
        //     })
        //     .then(function (html) {

        //         //We only actually need the first result for each value, I grabbed all of the relevant ones to make the design extensible.
        //         var $ = cheerio.load(html);
        //         var productNames = [];
        //         var productPrices = [];
        //         var productLinks = [];
        //         var imageLinks = [];

        //         $(".search-result-productimage").each(function (i, element) {

        //             var image = $(element).children().first().next().children().first().attr("src");
        //             imageLinks.push(image);
        //         });

        //         $(".price-main").each(function (i, element) {
        //             var price = $(element).children().first().text();


        //             // push each price into the productPrices array
        //             productPrices.push(price);
        //         });

        //         $(".product-title-link").each(function (i, element) {
        //             var link = "walmart.com"
        //             link += $(element).attr("href");;

        //             var name = $(element).children().first().next().text();

        //             if (name === '') {
        //                 name = $(element).children().first().text();
        //             }

        //             // push each link and name into the productLinks array
        //             productLinks.push(link);
        //             productNames.push(name);
        //         });

        //         //The returned object is the first match for each item
        //         firstMatch.name = productNames[0];
        //         firstMatch.price = productPrices[0];
        //         firstMatch.link = productLinks[0];
        //         firstMatch.image = imageLinks[0];

        //         console.log(firstMatch);
        //         res.json(firstMatch);
        //     })
        //     .then(function () {
        //         res.json(firstMatch);
        //     })

    }
};