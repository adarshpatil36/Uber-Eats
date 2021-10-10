const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer.js")(sequelize, Sequelize);
db.restaurant = require("./restaurant.js")(sequelize, Sequelize);
db.order = require("./order")(sequelize, Sequelize);
db.dishes = require("./dishes")(sequelize, Sequelize);
db.orderItem = require("./orderItem")(sequelize, Sequelize);
db.address = require("./address")(sequelize, Sequelize);

module.exports = db;
