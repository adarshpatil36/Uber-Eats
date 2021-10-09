module.exports = (app) => {
  app.use("/users", require("./customer"));
  app.use("/restaurant", require("./restaurant"));
};
