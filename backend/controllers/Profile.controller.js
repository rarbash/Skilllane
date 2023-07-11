const db = require("../models");
const Profile = db.profile;

module.exports = {
  create,
  findAll,
  findById,
  updateById,
};

async function create(
  firstName,
  lastName,
  nickname,
  birthday,
  gender,
  role,
  UserId
) {
  await Profile.create({
    firstName,
    lastName,
    nickname,
    birthday,
    gender,
    role,
    UserId,
  });
}

async function findAll() {
  return await Profile.findAll({});
}

async function findById(profileId) {
  return await Profile.findOne({ where: { id: profileId } });
}

async function updateById(id, info) {
  return await Profile.update(info, {
    where: { id: id },
  });
}
