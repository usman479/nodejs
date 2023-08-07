const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const EmployeeRoute = require("./routes/employee");
const connectDb = require('./database/connection');
connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/employee", EmployeeRoute);
