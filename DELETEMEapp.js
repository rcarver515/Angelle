const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})
  // Bringing the sendMail function.
const sendMail = require('./mail');



//Data parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.post('/email', (req, res) => {
  //send email here
  const { name, email, comment } = req.body;

  console.log('Data: ', req.body);
  sendMail(name, email, comment, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Internet Error' });
    } else {
      res.json({ message: 'Email sent!' });
    }
  })
});
