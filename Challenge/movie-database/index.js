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

app.get("/movies/add", (req, res) => {
  if (
    req.query.title == "" ||
    req.query.year == "" ||
    isNaN(req.query.year) ||
    req.query.year.length < 4
  ) {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  } else {
    movies.push({
      title: req.query.title,
      year: req.query.year,
      rating:
        req.query.rating == "" || req.query.rating == undefined
          ? (req.query.rating = 4)
          : req.query.rating
    });
    res.send({ status: 200, data: movies });
  }
});

/*

app.get("/movies/add?", function(req, res) {
  let rating = req.query.rating;
  let ratingINT = parseInt(rating);
  let year = req.query.year;
  let yearINT = parseInt(year);
  let title = req.query.title;

  if (
    title == "" ||
    year == "" ||
    year.split("").length != 4 ||
    year != parseInt(year)
  ) {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  } else if (rating == "" || rating == null) {
    ratingINT = 4;
    movies.push({ title: title, year: yearINT, rating: ratingINT });
    res.send({ status: 200, data: movies });
  } else {
    movies.push({ title: title, year: yearINT, rating: ratingINT });
    res.send({ status: 200, data: movies });
  }
});
*/

app.get("/movies/get", (req, res) =>
  res.send({ status: 200, message: movies })
);

app.get("/movies/get/by-date", (req, res) =>
  res.send({ status: 200, data: movies.sort((a, b) => a.year - b.year) })
);

app.get("/movies/get/by-rating", (req, res) =>
  res.send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) })
);

app.get("/movies/get/by-title", (req, res) =>
  res.send({
    status: 200,
    data: movies.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
  })
);

app.get("/movies/get/id/:ID", (req, res) => {
  if (req.params.ID < movies.length && req.params.ID >= 0) {
    res.send({ status: 200, data: movies[req.params.ID] });
  } else {
    res.send({
      status: 404,
      error: true,
      message: "the movie <ID> does not exist"
    });
  }
});

app.get("/movies/edit", (req, res) =>
  res.send({ status: 200, message: `Hello` })
);
app.get("/movies/delete", (req, res) =>
  res.send({ status: 200, message: `Hello` })
);

app.listen(port, () => console.log(`app listening on port ${port}!`));
