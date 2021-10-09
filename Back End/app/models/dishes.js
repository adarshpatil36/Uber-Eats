module.exports = (sequelize, Sequelize) => {
  const Dishes = sequelize.define("dishes", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    timings: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
    },
    rating: {
      type: Sequelize.DECIMAL(10, 2),
    },
    imageURL: {
      type: Sequelize.STRING,
    },
    restaurant: {
      type: Sequelize.STRING,
    },
  });

  return Dishes;
};
