
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get("/", function(request, response){
    response.render("home")
})


app.get("/employees", function(request, response){
    response.render(fetch("./employees.json")
     .then(function(resp){
        return resp.json();
    })
     .then(function(data) {
        console.log(data)
    })
}) 

function serverResponse() {
    console.log("Server is running on port here: 3001")
}

app.listen(3001, serverResponse);

