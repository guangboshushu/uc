const search = require('../api/search')
const fuzzySearch = require('../api/search/fuzzySearch')


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


const myFun = {
  '/api/search': routeSearch,
  '/api/fuzzy_search': routeFuzzySearch
}
module.exports = myFun
