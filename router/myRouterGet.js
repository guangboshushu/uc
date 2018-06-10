const search = require('../api/search')
const fuzzySearch = require('../api/search/fuzzySearch')
const fetchSubscribe = require('../api/user/fetchSubscribe')

const routeSearch = (req, res, callback) => {
  if (req) {
    search(req, res, result => {
      callback(result)
    })
  } else {
  callback(null)
  }
}

const routeFuzzySearch = (req, res, callback) => {
  if (req) {
    fuzzySearch(req, res, result => {
      callback(result)
    })
  } else {
  callback(null)
  }
}

const routeFetchSubscribe = (req, res, callback) => {
  if (req) {
    fetchSubscribe(req, res, result => {
      callback(result)
    })
  } else {
  callback(null)
  }
}

const myFun = {
  '/api/search': routeSearch,
  '/api/fuzzy_search': routeFuzzySearch,
  '/api/get_my_subscribrs': routeFetchSubscribe
}
module.exports = myFun
