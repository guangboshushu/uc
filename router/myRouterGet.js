const search = require('../api/search')
const fuzzySearch = require('../api/search/fuzzySearch')
const fetchSubscribe = require('../api/user/fetchSubscribe')
const fetchMySchool = require('../api/user/fetchMySchool')

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

const routeFetchMySchool = (req, res, callback) => {
  if (req) {
    fetchMySchool(req, res, result => {
      callback(result)
    })
  } else {
  callback(null)
  }
}

const myFun = {
  '/api/search': routeSearch,
  '/api/fuzzy_search': routeFuzzySearch,
  '/api/get_my_subscribes': routeFetchSubscribe,
  '/api/get_my_school': routeFetchMySchool
}
module.exports = myFun
