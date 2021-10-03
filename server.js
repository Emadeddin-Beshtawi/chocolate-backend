"use strict";
//============================Packages & App================================

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(`${MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(cors());
////////////// Importing /////////////
const { getDataFromAPI } = require("./controller/API.controller"); // 1)

const {
  createChocolate,
  getChocolate,
  deleteChocolate,
  updatedChocolate,
} = require("./controller/Chocolate.controller"); // 2)

////////////////// End of Importing ///////////////////

////////// CRUD ////////////
app.get("/getDataFromAPI", getDataFromAPI);
app.post("/createChocolate", createChocolate);
app.get("/getChocolate", getChocolate);
app.delete("/deleteChocolate/:id", deleteChocolate);
app.put("/updatedChocolate/:id", updatedChocolate);

///////// Hello ///////////

app.get("/", (req, res) => {
  res.send("Hello From Server");
});
//============================Initialization================================
// I can visit this server on http://localhost:8000
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
