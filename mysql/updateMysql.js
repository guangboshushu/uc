const connection = require('../config/mysql')
const splitMsData = require('../utility/splitMsData.js')

const updateMysql = (table, data, query, callback) => {
  const d = splitMsData(data)
  let kvStr = d.kv
  connection.query('update ' + table + ' set ' + kvStr + ' where ' + query + ' ', function (error, results, fields) {
    const res = {}
    if (error) {
      // throw error
      res.result = false
      res.action = 'update'
      res.OkPacket = results
    } else {
      res.result = true
      res.action = 'update'
      res.OkPacket = results
    }
    callback(res)
  })
}
module.exports = updateMysql
