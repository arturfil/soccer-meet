const pool = require('../pool');
const sql = require('../sql/auth_queries');

exports.listAll = async (req, res) => {
 
  try {
    pool.query(sql.list(), (err, response) => {
      if (err) throw err;
      if (response.length)
        res.json(response)
      res.end();
    })
  } catch (error) {
    res.json({error})
  }

}

exports.getById = async (req, res) => {
  try {
    pool.query(sql.getUser(req.params.userId), (err, response) => {
      if (err) throw err;
      if (response.length)
        res.json(response);
      res.end()
    })
    
  } catch (error) {
    res.json({error})
  }
}
