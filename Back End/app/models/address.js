module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    type: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.STRING,
    },
  });

  return Address;
};
