'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/carol_ogden_art'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
