const express = require("express");
const { resolve } = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static("static"));

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err.message);
  });

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
