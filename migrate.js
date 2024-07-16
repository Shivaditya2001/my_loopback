module.exports = function (app) {
  app.dataSources.transactional.automigrate();
  console.log("Performed automigration.");
}
