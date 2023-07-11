const db = require("../models");
const Users = db.users;
const Profile = db.profile;

module.exports = {
  create,
  findAll,
  findOneUserProfile,
  findOneUser,
};

async function create(username, password) {
  await Users.create({ username, password });
}

async function findAll() {
  return await Users.findAll({
    include: [
      {
        model: Profile,
        required: true,
      },
    ],
  }).catch((err) => {
    console.log(err);
  });
}

async function findOneUserProfile(username) {
  return await Users.findOne({
    where: { username: username },
    include: [
      {
        model: Profile,
        required: true,
      },
    ],
  }).catch((err) => {
    console.log(err);
  });
}

async function findOneUser(username) {
  return await Users.findOne({
    where: { username: username },
  }).catch((err) => {
    console.log(err);
  });
}
