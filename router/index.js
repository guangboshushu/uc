const express = require('express')
const myRouterGet = require('./myRouterGet')
const myRouterPost = require('./myRouterPost')

const router = express.Router()

function getClientIp(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
}
var inParth = '/'
router.use(function(req, res, next) {
  inParth = req.path
  console.log('inpath ' + inParth + '    ip：', getClientIp(req) + '   time: ' + new Date(parseInt(new Date().getTime())).toLocaleString().substr(0, 17))
  next()
})
router.use(function(req, res, next) {
  let inParth = req.path
  router.route(inParth)
    .get(function(req, res) {
      const MyFun = myRouterGet[inParth]
      MyFun(req, res, (e) => {
        res.send(e)
      })
    })
    .post(function(req, res) {
      const MyFun = myRouterPost[inParth]
      MyFun(req, res, (e) => {
        res.send(e)
      })
    })
  next()
})

module.exports = router
