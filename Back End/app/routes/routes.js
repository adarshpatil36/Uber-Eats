module.exports = (app) => {
  app.use("/users", require("./customer"));
  app.use("/restaurant", require("./restaurant"));
  app.use("/order", require("./order"));
  app.use("/dishes", require("./dishes"));
};
