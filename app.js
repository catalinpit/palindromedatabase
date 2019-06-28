// import the Express framework
const express = require('express')
// use Express
const app = express();
// set the application to use Embedded Javascript - render HTML instead of plain text
app.set('view engine', 'ejs');

// route for the root url
// when accessing the "/" route, the web app will render the homepage
app.get('/', (req, res) => {
    return res.render('homepage')
})

// configure the server to run on port 3000
app.listen(3000, () => {
    console.log("Palindrome database up and running, on port 3000")
})