const express = require("express");
const router = express.Router();

const character = require("./character.js");
const starship = require("./starship.js");

module.exports = { character, starship };