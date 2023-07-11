const { Router } = require("express");
const router = Router();
const courseController = require("../controllers/Course.controller");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const queryName = req.query.name;
    const queryStartDate = req.query.start;
    const queryEndDate = req.query.end;
    if (queryName) {
      const courses = await courseController.findByName(queryName);
      res.status(200).json({ courses: courses });
    } else if (queryStartDate && queryEndDate) {
      const courses = await courseController.findByStartEndDate(
        queryStartDate,
        queryEndDate
      );
      res.status(200).json({
        courses,
      });
    } else {
      const courses = await courseController.findAll();
      res.status(200).json({
        courses,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ errorMessage: "Not Found" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    if (req.user.profile.role === "instructor") {
      const courseInfo = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image ? req.body.image : null,
        category: req.body.category,
        subject: req.body.subject,
        numberStudent: req.body.numberStudent,
        UserId: req.user.profile.UserId,
      };

      const courses = await courseController.create(
        ...Object.values(courseInfo)
      );
      res
        .status(200)
        .json({ message: "Create course sucessfully", courses: courses });
    } else {
      const error = new Error();
      error.code = "403";
      throw error;
    }
  } catch (err) {
    if (err.code == 403) {
      res.status(403).send({ errorMessage: "Role user are not permitted" });
    } else {
      res.sendStatus(400);
      console.log(err);
    }
  }
});

module.exports = router;
