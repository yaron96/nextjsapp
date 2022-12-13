module.exports = {
  development: {
    // username: process.env.DB_USER, //TODO: ENV!
    username: "test",
    // password: process.env.DB_PASS,
    password: "example",
    // database: process.env.DB_NAME,
    database: "myapp",
    // host: process.env.DB_HOST,
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    // dialectOptions: {
    //   ssl: true,
    // },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};
