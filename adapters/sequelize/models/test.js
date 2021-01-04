'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    name: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING }
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};