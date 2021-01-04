'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {});
  return UserProfile;
};