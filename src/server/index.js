const express = require('express')
const next = require('next')
const { parse } = require('url')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dir: path.join(__dirname, '../client'), dev })
const handle = app.getRequestHandler()
const routes = require('../routes')

app.prepare().then(() => {
  const server = express()
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query = {} } = parsedUrl

    // return service worker
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, 'src/client/.next', pathname)
      app.serveStatic(req, res, filePath)
      return
    }

    // return routed pages
    const route = routes[pathname]
    if (route) {
      return app.render(req, res, route.page, route.query)
    }
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
