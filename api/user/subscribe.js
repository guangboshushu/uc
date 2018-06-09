const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (req, callback) => {
  let subscribe = req.query.subscribe
  let data = req.body
  data.regtime = new Date().getTime()
  console.log('action', subscribe)
  if(subscribe === 0) {
    console.log('subscribe=0')
    insertMysql('subscribe', data, res => {
      console.log('222')
      callback(res)
    })
  } else {
    console.log('unsubs')
    callback(null)
  }

}

module.exports = subscribe
