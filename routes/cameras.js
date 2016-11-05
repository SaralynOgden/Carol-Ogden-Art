'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/api/works', (_req, res, next) => {
  knex('works')
    .orderBy('title')
    .then((rows) => {
      const cameras = camelizeKeys(rows);

      res.send(cameras);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
