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
  let query = ' name = "' + schoolName + '" '
  selectSingle(fields, table, query, res => {
    if (res) {
      // update search count
      let data = {
        search: 'search + 1',
        count: 'add'
      }
      updateMysql(table, data, query, result => {})

      let _query = ' school_name = "' + schoolName + '" '
      selectSingle(fields, 'major', _query, result => {
        if (result) {
          res[0].major = result
        }
        callback(res[0])
      })

    } else {
      callback(null)
    }
  })
}
module.exports = search
