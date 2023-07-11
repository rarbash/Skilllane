const { Router } = require("express");
const router = Router();
const profileController = require("../controllers/Profile.controller");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const profiles = await profileController.findAll();
    res.status(200).json({ profiles: profiles });
  } catch (err) {
    res.status(404).json({ message: "Not Found" });
  }
});

router.get("/:profileId", async (req, res) => {
  try {
    const id = req.params.profileId;
    if (id) {
      const profile = await profileController.findById(id);
      res.status(200).json({ profile: profile });
    } else {
      const error = new Error();
      error.code = 400;
    }
  } catch (err) {
    err.code = 400 && res.status(400).json({ errorMessage: "Bad Request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const birthdayDate = new Date(req.body.birthday);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nickname = req.body.nickname;
    const birthday = birthdayDate.toISOString().split("T")[0];
    const gender = req.body.gender;
    const role = req.body.role;
    const user_id = req.body.userId;

    const profile = await profileController.create(
      firstName,
      lastName,
      nickname,
      birthday,
      gender,
      role,
      user_id
    );
    res.status(200).json({ message: "Profile created." });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.post("/update", auth, async (req, res) => {
  try {
    const profileId = req.body.id;

    const profiles = await profileController.updateById(profileId, req.body);
    res.status(200).json({ message: "Update profile sucessfully." });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
