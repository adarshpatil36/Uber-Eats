module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    user: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    profilePic: {
      type: Sequelize.STRING,
    },
    isRestaurant: {
      type: Sequelize.BOOLEAN,
    },
  });

  Customer.associate = (models) => {
    Customer.hasMany(models.Orders, {
      onDelete: "cascade",
    });
  };

  return Customer;
};
