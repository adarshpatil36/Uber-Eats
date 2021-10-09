module.exports = (sequelize, Sequelize) => {
  const OrderItem = sequelize.define("orderItem", {
    dishe: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return OrderItem;
};
