const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDatbase = require("./db");
const dotenv = require("dotenv");
const router = require("./router/CreateUser.js");

dotenv.config({
  path: "./config.env",
});

connectDatbase();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin  , X-Requested-With , Content-Type , Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./router/CreateUser.js"));
app.use("/api", require("./router/DisplayData.js"));
app.use("/api", require("./router/OrderData.js"));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listein on port ${port}`);
});
