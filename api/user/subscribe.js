const insertMysql = require('../../mysql/insertMysql.js')

const subscribe = (req, callback) => {
  let subscribe = req.query.subscribe * 1
  let data = req.body
  data.regtime = new Date().getTime()
  if(!subscribe) {
    insertMysql('bookmark', data, res => {
      callback(res)
    })
  } else {
    console.log('unsubs')
    callback(null)
  }

}

module.exports = subscribe
