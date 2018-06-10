const fetchSubscribe = require('./fetchSubscribe')
const sidSearch = require('../search/sidSearch')
const fetchMySchool = (req, res, callback) => {
  let openid = req.query.openid
  let REQ = {
    query: {
      openid: openid
    }
  }
  fetchSubscribe(REQ, '', res => {
    if (res) {
      let sids = []
      for (let sbs of res) {
        sids.push(sbs.school_id)
      }
      sidSearch(sids, res => {
        callback(res)
      })
    } else {
      callback(null)
    }
  })

}

module.exports = fetchMySchool
