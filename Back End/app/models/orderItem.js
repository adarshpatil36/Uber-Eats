module.exports = (sequelize, Sequelize) => {
  const OrderItem = sequelize.define("orderItem", {
    dishId: {
      type: Sequelize.STRING,
    },
    orderId: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Dishes, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return OrderItem;
};
