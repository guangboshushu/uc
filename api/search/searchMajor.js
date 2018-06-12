const selectSingle = require('../../mysql/selectSingle')
const updateMysql = require('../../mysql/updateMysql')

const search = (req, res, callback) => {
  let querys = req.query
  if (!querys || !querys.name) {
    callback(null)
    return false
  }
  let major_name = querys.name
  let fields = '*'
  let table = 'major'
  let query = ' major_name = "' + major_name + '" '
  selectSingle(fields, table, query, res => {
    if (res) {
      // update search count
      let data = {
        search: 'search + 1',
        count: 'add'
      }
      updateMysql(table, data, query, result => {})

      let _query = ' major_name = "' + major_name + '" '
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
