var cheerio = require("cheerio");
const puppeteer = require('puppeteer');

module.exports = {
    scraperCraiglist: function (req, res) {

        //Set up the URL to search on walmart by adding the search term. Puppeteer is smart and will understand spaces.
        var url = "https://seattle.craigslist.org/search/sss?query=" + req.params.searchTerm + "&sort=rel";
        var firstMatch = {};

        (async () => {
            headless = true;
            const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

            try {

                const page = await browser.newPage();
                await page.goto(url);
                const content = page.content();

                var $ = cheerio.load(content);
                var productNames = [];
                var productPrices = [];
                var productLinks = [];
                var imageLinks = [];

                $(".result-title").each(function (i, element) {
                    Link = $(element).attr("href");
                    Name = $(element).text();
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
                $(".swipe-wrap img").each(function (i, element) {
                    // console.log(element)
                    Image = $(element).attr("src")
                    imageLinks.push(Image)
                    // console.log(Image)
                })

                //console.log(image);
                firstMatch.name = productNames[0];
                firstMatch.price = productPrices[0];
                firstMatch.link = productLinks[0];
                firstMatch.image = imageLinks[0];

                res.JSON(firstMatch);

            } catch (error) {
                res.JSON(error);
                await browser.close();
            } finally {
                await browser.close();
            }

        });

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
        //         // console.log(html)
        //         var $ = cheerio.load(html);
        //         var productNames = [];
        //         var productPrices = [];
        //         var productLinks = [];
        //         var imageLinks = [];

        //         $(".result-title").each(function (i, element) {
        //             Link = $(element).attr("href");
        //             Name = $(element).text();
        //             // console.log(Link)
        //             // console.log(Name)
        //             productLinks.push(Link);
        //             productNames.push(Name);
        //         })
        //         $(".result-price").each(function (i, element) {
        //             Prices = $(element).text();
        //             //console.log(productPrices)
        //             productPrices.push(Prices);

        //         })
        //         $(".swipe-wrap img").each(function (i, element) {
        //             // console.log(element)
        //             Image = $(element).attr("src")
        //             imageLinks.push(Image)
        //             // console.log(Image)
        //         })

        //         //console.log(image);
        //         firstMatch.name = productNames[0];
        //         firstMatch.price = productPrices[0];
        //         firstMatch.link = productLinks[0];
        //         firstMatch.image = imageLinks[0];

        //     })
        //     .then(function () {
        //         res.json(firstMatch);
        //     })

    }
};

