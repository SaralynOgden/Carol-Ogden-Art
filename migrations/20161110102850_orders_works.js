'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('orders_works', (table) => {
    table.increments();
    table.integer('order_id')
      .notNullable()
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE')
      .index();
    table.integer('work_id')
      .notNullable()
      .references('id')
      .inTable('works')
      .onDelete('CASCADE')
      .index();
    table.integer('quantity')
      .notNullable()
      .defaultTo(1);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders_works');
};
