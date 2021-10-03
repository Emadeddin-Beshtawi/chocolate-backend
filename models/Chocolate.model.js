"use strict";

const mongoose = require("mongoose");

const chocolateSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  email: String,
});

const ChocolateModel = mongoose.model("chocolate", chocolateSchema);

module.exports = {
  ChocolateModel,
};
