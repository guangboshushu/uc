const selectSingle = require('../../mysql/selectSingle')

const search = (req, res, callback) => {
  let querys = req.query
  if (!querys || !querys.name) {
    callback(null)
    return false
  }
  let major_name = querys.name
  let fields = ' major_name '
  let table = 'major'
  let query = ' major_name like "%'+major_name+'%" '
  selectSingle(fields, table, query, res => {
    if (res) {
      let majors = []
      // res =  Array.from(new Set(res))
      for (let obj of res) {
        if (majors.indexOf(obj.major_name) < 0) {
          majors.push(obj.major_name)
        }
      }
      callback(majors)
    } else {
      callback(null)
    }
  })
}
module.exports = search
