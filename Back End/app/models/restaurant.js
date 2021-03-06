module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: Sequelize.STRING,
    },
    tags: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    timings: {
      type: Sequelize.STRING,
    },
    deliveryTime: {
      type: Sequelize.STRING,
    },
    deliveryFee: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
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
    restaurantPic: {
      type: Sequelize.STRING,
    },
    isRestaurant: {
      type: Sequelize.BOOLEAN,
    },
  });

  Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.Dishes, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Restaurant;
};
