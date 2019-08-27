var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
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
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  app.get("/api/characters", function(req, res) {
      return res.json(characters);
  })

  
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
