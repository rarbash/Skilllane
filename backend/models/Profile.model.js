module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  return Profile;
};
