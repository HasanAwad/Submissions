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

app.get(`/hello/:id`, function(req, res) {
  const id = req.params.id;
  res.send({ status: 200, message: `hello , ${id}` });
});

app.get("/search", (req, res) => {
  if (req.query.s) {
    res.send({ status: 200, message: "ok", data: req.query.s });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
