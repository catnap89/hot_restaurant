var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        routeName: "ryan",
        name: "Ryan",
        phoneNumber: "123-456-7890",
        email: "hi@gmail.com",
        id: 1
    },
    {
        routeName: "daniel",
        name: "Daniel",
        phoneNumber: "123-456-7890",
        email: "hi@gmail.com",
        id: 2
    },
    {
        routeName: "mike",
        name: "Mike",
        phoneNumber: "123-456-7890",
        email: "hi@gmail.com",
        id: 3
    }
  ];

  var waitlist = [];
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  app.get("/api/table", function(req, res) {
      return res.json(reservations);
  })

  // Create New Characters - takes in JSON input
app.post("/api/table", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
