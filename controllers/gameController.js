const pool  = require('../pool');
const sql = require('../sql/games_queries');

exports.getGames = async (req, res) => {
  try {
    pool.query(sql.list(), (err, response) => {
      if (err) throw err;
      if (response.length)
        res.json(response);
      res.end();
    })
  } catch (error) {
    return res.json(error)
  } 
}

exports.getById = async (req, res) => {
  try {
    pool.query(sql.getById(req.params.gameId), (err, response) => {
      if (err) throw err;
      if (response.length) 
        res.json(response);
      res.end();
    })
  } catch (error) {
    return res.json({error: "There was an error, please try again later"});
  }
}

exports.create = async (req, res) => {
  try {
    pool.query(sql.createGame(req.body), (err, response) => {
      if (err) throw err;
      if (response) 
        res.json({success: "Game was succesfully created"});
      res.end();
    })
  } catch (error) {
    return res.json({error: "There was an error, please try again later"});
  }
}

exports.update = async (req, res) => {
  try {
    pool.query(sql.editGame(req.body, req.params.gameId), (err, response) => {
      if (err) throw err;
      if (response) 
        res.json({success: "Game was succesfully updated"});
      res.end();
    })
  } catch (error) {
    return res.json({error: "There was an error, please try again later"});
  }
}

exports.deleteGame = (req, res) => {
  try {
    pool.query(sql.deleteGame(req.params.gameId), (err, response) => {
      if (err) throw err;
      if (response) 
        res.json({success: "Game was succesfully deleted"});
      res.end();
    })
  } catch (error) {
    return res.json({error: "There was an error, please try again later"});
  }
}