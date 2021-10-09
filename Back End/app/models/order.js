module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("order", {
    restid: {
      type: Sequelize.STRING,
    },
    userid: {
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

  Orders.associate = (models) => {
    Orders.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });

    Orders.hasMany(models.Dishes, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Orders;
};
