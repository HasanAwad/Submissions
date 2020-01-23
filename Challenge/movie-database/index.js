const express = require("express");
const app = express();
const port = 3000;
let date = new Date();

app.get("/", (req, res) => res.send("ok"));

app.get("/test", function(req, res) {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", function(req, res) {
  res.send({ status: 200, message: date.getDate() + ":" + date.getSeconds() });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
