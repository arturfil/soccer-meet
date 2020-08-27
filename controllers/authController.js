const mysql = require('mysql');
const settings = require('../keys');
const sql = require('../sql/auth_queries');

exports.listAll = async (req, res) => {
  const db = mysql.createConnection(settings.database_conn);

  db.query(sql.list(), (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    console.log(rows[0]);
  });

  res.end();
}

