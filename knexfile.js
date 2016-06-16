// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '1234',
      database : 'dev_resume',
      charset  : 'utf8'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '1234',
      database : 'pro_resume',
      charset  : 'utf8'
    }
  }

};
