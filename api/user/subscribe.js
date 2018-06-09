const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (req, callback) => {
  console.log('data', req.body)
  let subscribe = req.query.subscribe
  let data = req.body
  console.log('data', req.body)
  console.log('data', subscribe)
  data.regtime = new Date().getTime()
  if (!subscribe)
  insertMysql('subscribe', data, res => {
    console.log('222')
    callback(res)
  })
}

module.exports = subscribe
