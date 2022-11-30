const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Sorry i have not finished the personal task, i only made a ERD. you can check it out!");
});
app.use("/api", express.json(), router);

app.listen(8080, () => {
  console.log("Server is on!");
});