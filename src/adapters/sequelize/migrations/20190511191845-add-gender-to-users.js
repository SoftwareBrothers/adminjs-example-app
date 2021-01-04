module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Users', 'gender', Sequelize.STRING),

  down: (queryInterface, _Sequelize) =>
    queryInterface.removeColumn('Users', 'gender'),
};
