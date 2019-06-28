// import the Express framework
const express = require('express')
// use Express
const app = express();

// route for the root url
// when accessing the "/" route, the web app will render 
app.get('/', (req, res) => {
    return res.send('Hello World!')
})

// configure the server
app.listen(3000, () => {
    console.log("Palindrome database up and running, on port 3000")
})