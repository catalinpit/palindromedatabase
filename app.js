// import the Express framework
const express = require('express');
// import bodyParser 
const bodyParser = require('body-parser');
// use Express
const app = express();
// set the application to use Embedded Javascript - render HTML instead of plain text
app.set('view engine', 'ejs');
// use bodyParser middleware - allows us to manipulate the key-value pairs stored in the request object (req.body)
app.use(bodyParser.urlencoded({extended: true}))

// function that checks whether a String is a palindrome or not
function isPalindrome(userStr) { 
    // removes the special chars and spaces and transforms it to lowercase
    // g - global matching (all matches)
    // i - insensitive match - ignore letter case (case insensitive)
    newStr = userStr.replace(/[^A-Z0-9]/gi, "").toLowerCase()
    return newStr === newStr.split('').reverse().join('');
}

var pals = ["Dammit I'm Mad", "Race car"]
// transform the array into lowercase so it can be compared later with the palindrome entered by the user
var palindromes = pals.map((palindrome) => { return palindrome.toLowerCase() })

// route for the root url
// when accessing the "/" route, the web app will render the homepage
app.get('/', (req, res) => {
    res.render('homepage', {palindromes: palindromes});
})

// route for adding new Palindromes to the database
app.post('/addpalindrome', (req, res) => {
    // stores the palindrome entered by the user
    newpalindrome = (req.body.newpalindrome).toLowerCase();
    // check if the palindrome already exists in the array
    var isInArray = palindromes.includes(newpalindrome);

    if (isInArray) {
        console.log('Error - palindrome already exists in the db')
    } else {
        if (isPalindrome(newpalindrome)) {
            palindromes.push(newpalindrome)
        } else {
            console.log('Error - the string entered is not a palindrome')
        }
    }

    res.redirect('/');
})

// configure the server to run on port 3000
app.listen(3000, () => {
    console.log("Palindrome database up and running, on port 3000")
})