const subscribe = require('../api/user/subscribe')

const routeSubscribe = (req, res, callback) => {
  subscribe(req, (e) => {
    callback(e)
  })
}

const myFun = {
  '/api/subscribe': routeSubscribe
}
module.exports = myFun
