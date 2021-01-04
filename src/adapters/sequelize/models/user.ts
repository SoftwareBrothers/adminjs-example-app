const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        validate: { len: [3, 20] },
      },
      lastName: DataTypes.STRING,
      gender: DataTypes.ENUM('male', 'female'),
      isMyFavourite: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
    },
    {},
  );
  User.associate = function (_models) {
    // associations can be defined here
  };
  return User;
};

export default UserModel;
