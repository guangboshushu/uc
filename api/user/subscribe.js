const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = ('subscribe', data, callback) => {
  console.log('111')
  insertMysql(data, res => {
    console.log('222')
    callback(res)
  })
}

module.exports = subscribe
