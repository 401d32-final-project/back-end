'use strict';

const express = require('express');
const Article = require('../article/article-model');
const router = express.Router();

// fetches all articles by userId
router.get('/articles/:userId', (req, res, next) => {
  const userId = req.params.userId;
  Article.find({
    userId,
  })
    .then(results => res.send(results))
    .catch(error => res.send(error));
});

// saves an article to a user
router.post('/save-article', (req, res, next) => {
  const saveArticle = new Article(req.body);
  saveArticle.save()
    .then(article => res.status(201).send(article));
});

module.exports = router;
