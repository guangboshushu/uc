const connection = require('../config/mysql')

const deleteMysql = (table, query, callback) => {
  connection.query("delete  from " + table + " where " + query, (err, results, fields) => {
    if (err) {
      throw err
      callback(false)
    }
    if (results.affectedRows > 0) {
      callback(true)
    } else {
      callback(false)
    }
  })
}

module.exports = deleteMysql
