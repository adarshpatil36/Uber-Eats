module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("dishes", {
    dishes: {
      type: Sequelize.STRING,
    },
    deliveryAddress: {
      type: Sequelize.STRING,
    },
    totalAmount: {
      type: Sequelize.DECIMAL(10, 2),
    },
    OrderTime: {
      type: Sequelize.STRING,
    },
  });

  // Orders.associate = models => {
  //     Orders.
  // }

  return Orders;
};
