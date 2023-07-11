module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      valridate: {
        notEmpty: true,
      },
    },
    numberStudent: {
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
  return Course;
};
