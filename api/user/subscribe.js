const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (data, callback) => {
  insertMysql(data, res => {
    callback(res)
  })
}

module.exports = subscribe
