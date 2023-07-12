const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

const db = require("./models");
const usersRouter = require("./routes/Users.route");
const profileRouter = require("./routes/Profile.route");
const courseRouter = require("./routes/Course.route");

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/course", courseRouter);

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
  });
});
