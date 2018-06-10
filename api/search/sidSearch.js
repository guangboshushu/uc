const selectSingle = require('../../mysql/selectSingle')

const search = (sids, callback) => {
  let sidsStr = sids.join(',')
  let fields = '*'
  let table = 'school'
  let query = ' id IN  ('+sidsStr+') '
  selectSingle(fields, table, query, res => {
    if (res) {
      callback(res)
    } else {
      callback(null)
    }
  })
}
module.exports = search
