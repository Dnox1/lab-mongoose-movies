const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies})
    })
    .catch(err => next(err));
})

module.exports = router