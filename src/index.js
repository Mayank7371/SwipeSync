const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
  next();
});
app.post("/", (req, res, next) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
