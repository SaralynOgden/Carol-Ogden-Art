'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

router.get('/api/orders', authorize, (req, res, next) => {
  knex('orders')
    .where('user_id', req.token.userId)
    .orderBy('created_at', 'DESC')
    .then((rows) => {
      const ordersInfo = camelizeKeys(rows);
      const knexArray = [];
      for (const orderInfo of ordersInfo) {
        knexArray.push(knex('orders_works')
                        .select('works.title', 'orders_works.created_at', 'works.img_url', 'works.price', 'orders_works.quantity')
                        .innerJoin('works', 'orders_works.work_id', 'works.id')
                        .where('order_id', orderInfo.id))
      }

      Promise.all(knexArray)
        .then((results) => res.send(camelizeKeys(results)))
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/orders', authorize, (req, res, next) => {
  const { works, address1, address2, city, state, zip } = req.body;

  if (!address1 || !address1.trim()) {
    return next(boom.create(400, 'Address must not be blank'));
  }

  if (!city || !city.trim()) {
    return next(boom.create(400, 'City must not be blank'));
  }

  if (!state || !state.trim()) {
    return next(boom.create(400, 'State must not be blank'));
  }

  if (!zip || !zip.trim()) {
    return next(boom.create(400, 'Zip must not be blank'));
  }

  const insertOrder = { userId: req.token.userId, address1, address2, city, state, zip };
  let order;

  knex('orders')
    .insert(decamelizeKeys(insertOrder), '*')
    .then((rows) => {
      order = camelizeKeys(rows[0]);

      for (const work of works) {
        work.orderId = order.id;
        work.workId = work.id;
        delete work.id;
      }
      knex('orders_works')
        .insert(decamelizeKeys(works))
        .then((result) => res.send(result))
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
