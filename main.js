const customer = require("./customer");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();  //THIS is an instance of Express Application (Web Server)
app.use(cors());
app.use(bodyparser.json());

app.use(customer.router);

app.listen(3000);
