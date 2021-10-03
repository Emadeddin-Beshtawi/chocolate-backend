"use strict";

const { ChocolateModel } = require("../models/Chocolate.model");

const createChocolate = async (req, res) => {
  const chocolate = req.body;
  const newChocolate = new ChocolateModel({
    title: chocolate.title,
    imageUrl: chocolate.imageUrl,
    email: chocolate.email,
  });
  try {
    await newChocolate.save();
    res.send("Added Have Done Successfully");
  } catch (e) {
    res.send(e);
  }
};

const getChocolate = async (req, res) => {
  const email = req.query.email;
  await ChocolateModel.find({ email: email }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

const deleteChocolate = async (req, res) => {
  try {
    const deletefav = await ChocolateModel.findByIdAndDelete(req.params.id);
    const getFav = await ChocolateModel.find();
    res.status(200).json({
      status: "sucess",
      data: getFav,
    });
  } catch (err) {
    res.status(400).json({ status: err });
  }
};

const updatedChocolate = async (req, res) => {
  try {
    const updatefav = await ChocolateModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    const getFav = await ChocolateModel.find();
    res.status(200).json({
      status: "sucess",
      data: {
        getFav,
      },
    });
  } catch (err) {
    res.status(400).json({ status: err });
  }
};

module.exports = {
  createChocolate,
  getChocolate,
  deleteChocolate,
  updatedChocolate,
};
