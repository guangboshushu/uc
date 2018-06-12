const selectSingle = require('../../mysql/selectSingle')

const search = (req, res, callback) => {
  let querys = req.query
  console.log('req.query', querys)
  if (!querys || !querys.school) {
    console.log('req.query', 'no data')
    callback(null)
    return false
  }
  let schoolName = querys.school
  let fields = ' id, name, ranking '
  let table = 'school'
  let query = ' name like "%'+schoolName+'%" '
  selectSingle(fields, table, query, res => {
    console.log('res', res)
    if (res) {
      callback(res)
    } else {
      callback(null)
    }
  })
}
module.exports = search
