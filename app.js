const express = require('express')
const app = express()
const multipart = require('connect-multiparty')
const bodyParser = require('body-parser')
const ucRoute = require('./router')

app.use(multipart())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static(__dirname + '/static'))

app.use('/uc', ucRoute)
app.use((req, res, next) => {
  const err = new Error('Page Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
  res.send('hi , this is not a page')
})

let port = 8787
app.listen(port, (req, res) => {
  console.log('-----------------------------------------------------------------------------------------------')
  console.log('|                               server is start, the port is : ' + port + '                            |')
  console.log('-----------------------------------------------------------------------------------------------')
})
