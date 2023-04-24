const database = require("./database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};          

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  database
  .query("select * from movies where id = ?" [id])
  .then(([movies]) => {
    if (movies[0] != null) {
      res.json(movies[0]);
    }else {
      res.status(404).send("Not found");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving data from database");
  })
};

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  database
  .query("select * from movies where id = ?" [id])
  .then(([users]) => {
    if (users.find(user => user.id === id)) {
      res
      .json(users.find(user => user.id === id));
    }else {
      res.status(404).send("Not found");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving data from database");
  })
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUserById
};
