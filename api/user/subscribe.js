const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (req, callback) => {
  let subscribe = req.query.subscribe * 1
  let data = req.body
  data.regtime = new Date().getTime()
  console.log('action', typeof(subscribe))
    console.log('action===0', subscribe===0)
  if(!subscribe) {
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
