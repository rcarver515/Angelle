const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const Mailgun = require("mailgun-js");
const PORT = process.env.PORT || 8080;

var DOMAIN = 'sandboxb878519befff4ab5bf41994adb529b11.mailgun.org	';
var mailgun = require('mailgun-js')({ apiKey: process.env.api_key, domain: DOMAIN });

// Bringing the sendMail function.
const sendMail = require('./mail');

require('dotenv').config()

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shopdb";
mongoose.Promise=Promise;
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("Successfully connected to MongoDB.");
})
// Define API routes here
require("./routes/apiRoutes")(app);
app.post('/email', (req, res) => {
  //send email here
  const { name, email, comment } = req.body;

  console.log('Data: ', req.body);
  sendMail(name, email, comment, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Internet Error' });
    } else {
      res.json({ message: 'Email sent!' });
    }
  });
});
mailgun.post(
  '/routes',
 {"priority": 0, 
 "description": 'Sample route',
  "expression": 'catch_all()', 
  "action": 'forward("tchalla575@gmail.com")', 
  "action": 'stop()'}, 
  function (error, body) {
  console.log(body);
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
