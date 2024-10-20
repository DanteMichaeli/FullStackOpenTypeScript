import express from "express";
import { calculateBmi } from "./bmiCalculator";
//const express = require("express");
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  //get and validate params
  if (
    !req.query.height ||
    !req.query.weight ||
    isNaN(Number(req.query.height)) ||
    isNaN(Number(req.query.weight))
  ) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  if (height <= 0 || weight <= 0) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  const result = calculateBmi(height, weight);

  res.send({
    weight,
    height,
    bmi: result,
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
