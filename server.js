const express = require('express')
const next = require('next')
const Router = require('./routes')
 
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const server = express()
const handle = Router.getRequestHandler(app)
 
app.prepare()
  .then(() => {
	server.get('/params', (req, res) => { //define the empty one, next can't handle it
		return app.render(req, res, '/params')
	})
    server.get('/params/:id', (req, res) => {
		return app.render(req, res, '/params', req.params)
	})
    server.listen(3000)
  })