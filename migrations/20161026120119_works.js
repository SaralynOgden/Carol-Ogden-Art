'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('works', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('img_url').notNullable();
    table.enum('medium', ['pencil', 'acrylic', 'water_color', 'oil'])
         .defaultTo('');
    table.float('price');
    table.string('dimensions');
    table.boolean('print_available');
    table.boolean('original_available');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('works');
};
