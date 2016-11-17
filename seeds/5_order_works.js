/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('orders_works').del()
    .then(() => {
      return knex('orders_works').insert([{
        id: 1,
        order_id: 1,
        work_id: 1,
        quantity: 1
      }, {
        id: 2,
        order_id: 2,
        work_id: 3,
        quantity: 2
      }, {
        id: 3,
        order_id: 2,
        work_id: 1,
        quantity: 1
      }, {
        id: 4,
        order_id: 3,
        work_id: 2,
        quantity: 1
      }, {
        id: 5,
        order_id: 3,
        work_id: 2,
        quantity: 3
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('orders_works_id_seq', (SELECT MAX(id) FROM orders_works));"
      );
    });
};
