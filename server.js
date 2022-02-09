const express = require('express');
const https = require("https");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"/webapp")));

app.get("/", function () {
    console.log("serve`s up");
});

app.listen(3000);