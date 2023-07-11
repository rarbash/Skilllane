module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      get() {
        return this.getDataValue("id");
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
  });

  return Users;
};
