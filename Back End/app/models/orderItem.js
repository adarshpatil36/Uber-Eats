module.exports = (sequelize, Sequelize) => {
  const OrderItem = sequelize.define("orderItem", {
    dishes: {
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
