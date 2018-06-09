const search = require('../api/search')


const routeSearch = (req, res, callback) => {
  if (req) {
    search(req, res, result => {
      callback(result)
    })
  } else {
  callback(null)
  }
}


const myFun = {
  '/api/search': routeSearch
}
module.exports = myFun
