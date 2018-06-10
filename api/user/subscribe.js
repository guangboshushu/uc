const insertMysql = require('../../mysql/insertMysql.js')
const deleteMysql = require('../../mysql/deleteMysql.js')
const updateMysql = require('../../mysql/updateMysql.js')

const subscribe = (req, callback) => {
  let subscribe = req.query.subscribe * 1
  let data = req.body
  data.regtime = new Date().getTime()
  if(!subscribe) {

    insertMysql('bookmark', data, res => {
      let schoolData = {
        bookmark: 'bookmark + 1',
        count: 'add'
      }
      let query = 'id = ' + data.school_id
      updateMysql('school', schoolData, query, result => {
      })
      callback(res)
    })

  } else {

    let query = 'openid = "'+data.openid+'" and school_id = ' + data.school_id
    deleteMysql('bookmark', query, res => {
      let schoolData = {
        bookmark: 'bookmark - 1',
        count: 'add'
      }
      let query = 'id = ' + data.school_id
      updateMysql('school', schoolData, query, result => {
      })
        callback(res)
    })

  }
}

module.exports = subscribe
