const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const fs = require("fs");

dotenv.config({ path: "./config.env" });

const data = fs.readFileSync(`${__dirname}/data.json`, `utf-8`);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// {
//   title: "Beyond Earth",
//   thumbnail: {
//     trending: {
//       small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
//       large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
//     },
//     regular: {
//       small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
//       medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//       large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
//     },
//   },
//   year: 2019,
//   category: "Movie",
//   rating: "PG",
//   isBookmarked: false,
//   isTrending: true,
// },

const movieSchema = new mongoose.Schema({
  name: {
    title: String,
    // valdiator - for data validation
    // second parameter = alert string which will be send by DB
    required: [true, "No title"],
  },
  thumbnail: {
    type: Buffer,
    required: [true, "No thumbnail"],
  },
  year: {
    type: Number,
    required: [true, "No year"],
  },
  category: {
    type: String,
    required: [true, "No category"],
  },
  rating: {
    type: String,
    required: [true, "No rating"],
  },
  isBookmarked: {
    type: Boolean,
    required: [true, "No isBookmarker"],
  },
  isTrending: {
    type: Boolean,
    required: [true, "No isTrending"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);
