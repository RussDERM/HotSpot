var express = require('express');
var path = require('path');
// grap express
var app = express();
// PORT to use, needs something else. 
var PORT = process.env.POT || 8080;
// express parameters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HEY! LISTEN!









app.listen(PORT, function () {
  console.log("HEY! LISTEN! ON PORT: " + PORT);
});
