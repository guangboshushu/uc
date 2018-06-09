const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (data, callback) => {
  console.log('111')
  insertMysql('subscribe', data, res => {
    console.log('222')
    callback(res)
  })
}

module.exports = subscribe
