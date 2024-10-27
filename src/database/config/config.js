module.exports = {
  development: {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    dialect: 'mysql',
    port: process.env.MYSQLDB_DOCKER_PORT,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
