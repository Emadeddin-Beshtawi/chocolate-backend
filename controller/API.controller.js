"use strict";
const axios = require("axios");
require("dotenv").config();
const mongoose = require("mongoose");

const { Chocolate } = require("../models/API.model");

//Retrieve All Data from the API's

const getDataFromAPI = async (req, res) => {
  await axios.get(`${process.env.THIRD_API_PARTY}`).then((results) => {
    const allChocolate = results.data.map((chocolate) => {
      return new Chocolate(chocolate);
  
    });
    console.log(allChocolate);
    res.send(allChocolate);
  })
  .catch((err) =>{
    console.log(err, "From API Catch");
  })
};

module.exports = {
  getDataFromAPI
};
