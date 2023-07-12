const db = require("../models");
const { fn, where, col, Op } = require("sequelize");
const Course = db.course;

module.exports = {
  create,
  findAll,
  findByName,
  findByStartEndDate,
};

async function create(
  name,
  description,
  image,
  category,
  subject,
  numberStudent,
  UserId
) {
  await Course.create({
    name,
    description,
    image,
    category,
    subject,
    numberStudent,
    UserId,
  });
}

async function findAll() {
  return await Course.findAll({});
}

async function findByName(name) {
  return await Course.findAll({
    where: where(
      fn("LOWER", col("name")),
      "LIKE",
      "%" + name.toLowerCase() + "%"
    ),
  });
}

async function findByStartEndDate(start, end) {
  const startDate = new Date(start + " 00:00:00");
  const endDate = new Date(end + " 23:59:59");
  return await Course.findAll({
    where: {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
  });
}
