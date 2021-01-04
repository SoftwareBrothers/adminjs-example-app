module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Users', 'isMyFavourite', Sequelize.BOOLEAN),

  down: (queryInterface, _Sequelize) =>
    queryInterface.removeColumn('Users', 'isMyFavourite'),
};
