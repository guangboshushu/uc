const selectSingle = require('../../mysql/selectSingle')

const fetchSubscribe = (req, res, callback) => {
  let openid = req.query.openid
  if (!openid) {
    callback(null)
    return false
  }
  let fields = 'school_id'
  let table = 'bookmark'
  let query = ' openid = "' + openid + '" '
  selectSingle(fields, table, query, res => {
    if (res) {
      callback(res)
    } else {
      callback(null)
    }
  })
}
module.exports = fetchSubscribe
