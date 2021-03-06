"use strict";
const url = require('url');
const express = require('express');
const router  = express.Router();

//grab data for polls page
module.exports = (knex) => {
  router.get("/", (req, res) => {
       knex
      .select("*", "options.title AS question")
      .from("options")
       .leftOuterJoin("polls", "polls_id", "polls.id")
       .orderBy("points", "desc")
      .then((results) => {
       res.json(results);
      });
  });
  return router;
};

