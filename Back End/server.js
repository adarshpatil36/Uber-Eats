const express = require("express");

var app = express();
app.get("/", (request, reponse) => {
  reponse.send("Hello World...!!!");
});

app.listen(8080, () => {
  console.log("Started application on port %d", 8080);
});
