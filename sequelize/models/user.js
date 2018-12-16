module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: { len: [3, 20] },
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
  }, {})
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
