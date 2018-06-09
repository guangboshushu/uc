const selectSingle = require('../../mysql/selectSingle')
const updateMysql = require('../../mysql/updateMysql')

const search = (req, res, callback) => {
  let querys = req.query
  if (!querys || !querys.school) {
    callback(null)
    return false
  }
  let schoolName = querys.school
  let fields = '*'
  let table = 'school'
  let query = ' name = "'+schoolName+'" '
  selectSingle(fields, table, query, res => {
    if (res) {
      let data = {
        search: 'search + 1',
        count: 'add'
      }
      updateMysql(table, data, query, result => {
        if(result.result) {
          res[0].search += 1
          callback(res[0])
        } else {
          callback(res[0])
        }
      })

    } else {
      callback(null)
    }
  })
}
module.exports = search
