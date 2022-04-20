const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
