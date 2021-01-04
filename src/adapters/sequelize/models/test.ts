const TestModel = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      name: { type: DataTypes.STRING },
      text: { type: DataTypes.STRING },
    },
    {},
  );
  Test.associate = function (_models) {
    // associations can be defined here
  };
  return Test;
};

export default TestModel;
