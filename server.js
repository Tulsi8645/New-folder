require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
const app = express();

//connection to mongodb
mongoose
  .connect(process.env.DB_URL) // use env for this kind of secret urls
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000; // Use the port from the environment variables, default to 3000 if it's not set

app.listen(PORT, () => {
  console.log(`Node api is running on port ${PORT}`); // Use the port from the environment variables
});