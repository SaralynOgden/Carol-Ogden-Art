/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('works').del()
    .then(() => {
      return knex('works').insert([{
        id: 1,
        title: 'baby_chick',
        img_url: './art/baby_chick.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: null,
        print_available: true,
        original_available: false
      },
      {
        id: 2,
        title: 'black_capped_vireo',
        img_url: './art/black_capped_vireo.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },
      {
        id: 3,
        title: 'black_throated_grey_warbler',
        img_url: './art/black_throated_grey_warbler.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },
      {
        id: 4,
        title: 'blue_bird_of_sadness',
        img_url: './art/blue_bird_of_sadness.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '8x8',
        print_available: true,
        original_available: false
      },
      {
        id: 5,
        title: 'blue_bird',
        img_url: './art/blue_bird.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '6x8',
        print_available: true,
        original_available: false
      },
      {
        id: 6,
        title: 'blue_jay',
        img_url: './art/blue_jay.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '8x8',
        print_available: true,
        original_available: false
      },
      {
        id: 7,
        title: 'bunny',
        img_url: './art/bunny.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },
      {
        id: 8,
        title: 'cardinal',
        img_url: './art/cardinal.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '8x8',
        print_available: true,
        original_available: false
      },
      {
        id: 9,
        title: 'chick_in_coop',
        img_url: './art/chicken_in_coop.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },{
        id: 10,
        title: 'chickadee',
        img_url: './art/chickadee.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },{
        id: 11,
        title: 'chicken',
        img_url: './art/chicken.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },{
        id: 12,
        title: 'chipmonk',
        img_url: './art/chipmonk.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },{
        id: 13,
        title: 'dove_on_olive_branch',
        img_url: './art/dove_on_olive_branch.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: null,
        print_available: true,
        original_available: false
      },{
        id: 14,
        title: 'duck',
        img_url: './art/duck.jpg',
        medium: 'acrylic',
        dimensions: null,
        price: 369.99,
        dimensions: '5x5',
        print_available: true,
        original_available: false
      },{
        id: 15,
        title: 'encircled',
        img_url: './art/encircled.jpg',
        medium: 'oil',
        dimensions: null,
        price: 369.99,
        dimensions: null,
        print_available: true,
        original_available: false
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('works_id_seq', (SELECT MAX(id) FROM works));"
      );
    });
};
