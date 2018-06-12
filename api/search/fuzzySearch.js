const selectSingle = require('../../mysql/selectSingle')

const search = (req, res, callback) => {
  let querys = req.query
  if (!querys || !querys.school) {
    callback(null)
    return false
  }
  let schoolName = querys.school
  let fields = ' id, name, ranking '
  let table = 'school'
  let query = ' name like "%'+schoolName+'%" '
  selectSingle(fields, table, query, res => {
    if (res) {
      callback(res)
    } else {
      callback(null)
    }
  })
}
module.exports = search
