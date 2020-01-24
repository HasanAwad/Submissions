const express = require("express");
const app = express();
const port = 3000;
let date = new Date();
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

app.get("/", (req, res) => res.send("ok"));

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  res.send({ status: 200, message: date.getDate() + ":" + date.getSeconds() });
});

app.get(`/hello/:id`, (req, res) => {
  const id = req.params.id;
  res.send({ status: 200, message: `hello , ${id}` });
});
app.get("/hello", (req, res) => res.send({ status: 200, message: `Hello` }));

app.get("/search", (req, res) => {
  if (req.query.s == "") {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
  res.send({ status: 200, message: "ok", data: req.query.s });
});

app.get("/movies/add", (req, res) =>
  res.send({ status: 200, message: "hello" })
);
app.get("/movies/get", (req, res) =>
  res.send({ status: 200, message: movies })
);
app.get("/movies/edit", (req, res) =>
  res.send({ status: 200, message: `Hello` })
);
app.get("/movies/delete", (req, res) =>
  res.send({ status: 200, message: `Hello` })
);

app.listen(port, () => console.log(`app listening on port ${port}!`));
