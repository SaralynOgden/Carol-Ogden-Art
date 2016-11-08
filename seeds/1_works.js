/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('works').del()
    .then(() => {
      return knex('works').insert([{
        id: 1,
        title: 'Baby Chick',
        img_url: './art/baby_chick.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 15,
        dimensions: null,
        type: 'print'
      },
      {
        id: 2,
        title: 'Black Capped Vireo',
        img_url: './art/black_capped_vireo.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 20,
        dimensions: '5x5',
        type: 'print'
      },
      {
        id: 3,
        title: 'Black Throated Grey Warbler',
        img_url: './art/black_throated_grey_warbler.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 50,
        dimensions: '5x5',
        type: 'original'
      },
      {
        id: 4,
        title: 'Blue Bird of Sadness',
        img_url: './art/blue_bird_of_sadness.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 125,
        dimensions: '8x8',
        type: 'original'
      },
      {
        id: 5,
        title: 'Blue Bird',
        img_url: './art/blue_bird.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 20,
        dimensions: '6x8',
        type: 'original'
      },
      {
        id: 6,
        title: 'Blue Jay',
        img_url: './art/blue_jay.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 27,
        dimensions: '8x8',
        type: 'original'
      },
      {
        id: 7,
        title: 'Bunny',
        img_url: './art/bunny.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 40,
        dimensions: '5x5',
        type: 'original'
      },
      {
        id: 8,
        title: 'Cardinal',
        img_url: './art/cardinal.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '8x8',
        type: 'print'
      },
      {
        id: 9,
        title: 'Chick in Coop',
        img_url: './art/chicken_in_coop.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 100,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 10,
        title: 'Chickadee',
        img_url: './art/chickadee.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 11,
        title: 'Chicken',
        img_url: './art/chicken.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 12,
        title: 'Chipmonk',
        img_url: './art/chipmonk.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 55,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 13,
        title: 'Dove on Olive Branch',
        img_url: './art/dove_on_olive_branch.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 20,
        dimensions: null,
        type: 'print'
      },{
        id: 14,
        title: 'Duck',
        img_url: './art/duck.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 20,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 15,
        title: 'Encircled',
        img_url: './art/encircled.jpg',
        medium: 'oil',
        theme: 'people',
        price: 200,
        dimensions: null,
        type: 'original'
      },{
        id: 16,
        title: 'Finch',
        img_url: './art/finch.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 20,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 17,
        title: 'Yellow Warbler on Forsythia',
        img_url: './art/yellow_warbler_on_forsythia.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 25,
        dimensions: '8x8',
        type: 'print'
      },{
        id: 18,
        title: 'Fox',
        img_url: './art/fox.jpg',
        medium: 'oil',
        theme: 'small friends',
        dimensions: '8x8',
        price: 20,
        dimensions: null,
        type: 'print'
      },{
        id: 19,
        title: 'Gerbil',
        img_url: './art/gerbil.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 20,
        title: 'Hedgehog',
        img_url: './art/hedgehog.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 30,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 21,
        title: 'Shy Hedgehog',
        img_url: './art/shy_hedgehog.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 50,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 22,
        title: 'Lucy Warbler',
        img_url: './art/lucy_warbler.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 50,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 23,
        title: 'Mountain Chickadee',
        img_url: './art/mountain_chickadee.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 50,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 24,
        title: 'Sophie the Sheep',
        img_url: './art/sophie_the_sheep.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 30,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 25,
        title: 'Spring Sparrow',
        img_url: './art/spring_sparrow.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 125,
        dimensions: '8x8',
        type: 'original'
      },{
        id: 26,
        title: 'Swallow',
        img_url: './art/swallow.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 27,
        title: 'Summer Sparrow',
        img_url: './art/summer_sparrow.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 200,
        dimensions: '5x5',
        type: 'original'
      },{
        id: 28,
        title: 'Two Sparrows a Farthing',
        img_url: './art/two_sparrows_a_farthing.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 30,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 29,
        title: 'White Kitten',
        img_url: './art/white_kitten.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      },{
        id: 30,
        title: 'Yellow Warber',
        img_url: './art/yellow_warbler.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 125,
        dimensions: '8x8',
        type: 'original'
      },{
        id: 31,
        title: 'Yellow Warbler Landing',
        img_url: './art/yellow_warbler_landing.jpg',
        medium: 'oil',
        theme: 'small friends',
        price: 10,
        dimensions: '5x5',
        type: 'print'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('works_id_seq', (SELECT MAX(id) FROM works));"
      );
    });
};
