# Cheap-Cheep
Heroku Domain URL : https://limitless-depths-91026.herokuapp.com/

## Contributors 
+ Raymond He
+ Elizabeth Holmes
+ Shreejaya lama
+ Elliott White

## Overview
**Cheap Cheep** is our final project for University of washington Coding Bootcamps curriculum. The project is a full MERN Stack (Node.js, MongoDB, Express and React) application. This Application allows users to create personal shopping lists of different items across multiple websites. Users create an account in which they can create multiple shopping lists for different needs. Item information is scraped from the website of the user's choice, and added to their lists. The application is backed up by a mongo database for storing user, list, and item data.

## Installation
Here are the steps for running this application locally on your machine:
1. Clone the repo to your local machine: https://github.com/rayhe921/Cheap-Cheep
2. cd into the directory
3. run "npm install" to install all the necessary packages
4. run "npm start" to start the server

## Technologies used
- HTMl
- Bootstrap
- Node js
- Express
- React
- Mongoose
- JavaScript
- AJAX
- Cheerio
- Puppeteer

## project tools
- **GitHub** to maintain code for Project
- **Heroku** project deveployment


## Known Issues
- The Modal displaying our loading gif doesn't always display correctly. This is likely because of the way in which React batch updates setState calls.
- Lists can't be deleted


## Improvement Opportunities.
Our original concept for this application was more of a budgeting app. Users could set a budget for each list, and each time they added an item it would scrape the item across multiple websites, and return you the lowest priced version and a link to which site offered it. During our development process, we were significantly bottlenecked trying to find websites that we could scrape from successfully. In the current version of this app you can only scrape from two websites, Walmart and Craigslist. Because these two websites list products so differently, it's much harder to confirm that you're looking at the same product on each website. A production version of this application would be able to get access to product APIs unavailable to student developers, which would be a much stabler and more robust path forward.

Also in our original concept, we wanted users to be able to prioritize items on their lists, so that the application would not only price compare but also tell you which items you can afford to buy based on your prioritization and total budget.

## Using the App
### Login page
 ![item iformatiom page](/client/public/img/login.jpg)
New users need to create an account using the form on this page. Once completed, users can login with their provided username and password on the top right of the page.
### Home page
 ![login page](/client/public/img/image2.jpg)
New users will need to create a list before they can start adding items. Once this is done, the user can enter search terms and look for items on either Walmart or Craigslist with the provided buttons. If the user accepts the item found, it gets added to their list. If a user has multiple lists, they can switch between them by clicking on them. Items can be deleted by clicking the 'X' next to them.

