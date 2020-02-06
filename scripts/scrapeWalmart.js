var cheerio = require("cheerio");
const puppeteer = require('puppeteer');

function scrapeWalmart(searchTerm){

    var url = "https://www.walmart.com/search/?query=" + searchTerm;

    puppeteer.launch().then(function (browser) {
        return browser.newPage();
    })
        .then(function (page) {
            page.setViewport({
                width: 1000,
                height: 1300,
                deviceScaleFactor: 1,
            });
    
            return page.goto(url).then(function () {
                page.screenshot({ path: './screencap1.png' });
                return page.content();
            })
        })
        .then(function (html) {
            var $ = cheerio.load(html);
            var productNames = [];
            var productPrices = [];
            var productLinks = [];
    
    
            $(".product-brand").each(function (i, element) {
                var name = $(element).next().text();
    
                //push each name into the productNames array
                productNames.push(name);
            });
    
            $(".price-main").each(function (i, element) {
                var price = $(element).children().first().text();
    
    
                // push each price into the productPrices array
                productPrices.push(price);
            });
    
            $(".product-title-link").each(function (i, element) {
                var link = "walmart.com"
                link += $(element).attr("href");;
    
                // push each link into the productLinks array
                productLinks.push(link);
            });
    
            var firstMatch = {
                name: productNames[0],
                price: productPrices[0],
                link: productLinks[0]
            }
    
            console.log(firstMatch);
        })
}

scrapeWalmart("handbag");
scrapeWalmart("dinosaur");