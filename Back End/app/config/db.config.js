module.exports = {
  HOST: "uber-eats-db.cmlqtbfzbyat.us-east-2.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "SjsuFall",
  DB: "Uber_Eats",
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
