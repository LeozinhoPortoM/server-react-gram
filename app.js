require("dotenv").config()

const express = require("express");
const path = require("path");
const cors = require("cors");
const { urlencoded } = require("express");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});
