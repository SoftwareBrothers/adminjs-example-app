'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavouritePlace = sequelize.define('FavouritePlace', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    publishedAt: DataTypes.DATE,
  }, {});
  FavouritePlace.associate = function(models) {
    FavouritePlace.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return FavouritePlace;
};