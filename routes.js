const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('params', '/params/:id', 'params')             // params   params   /params/:id