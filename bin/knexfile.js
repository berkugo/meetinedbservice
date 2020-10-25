const settings = require('./settings')

module.exports = {
  development: {
    client: 'postgresql',
    connection: settings.connectionString,
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
