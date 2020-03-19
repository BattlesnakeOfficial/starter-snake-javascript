/**
 * Don't worry about anything in this file,
 * focus on writing your snake logic in index.js endpoints.
 */

const poweredByHandler = (req, res, next) => {
  res.setHeader('X-Powered-By', 'Battlesnake')
  next()
}

const fallbackHandler = (req, res, next) => {
  console.dir(req.baseUrl)
  // Root URL path
  if (req.baseUrl === '') {
    res.status(200)
    // If you open your snake URL in a browser you should see this message.
    return res.send(`Your Battlesnake is alive!`)
  }

  // Short-circuit favicon requests
  if (req.baseUrl === '/favicon.ico') {
    res.set({ 'Content-Type': 'image/x-icon' })
    res.status(200)
    res.end()
    return next()
  }

  // Reroute all 404 routes to the 404 handler
  const err = new Error()
  err.status = 404
  return next(err)
}

const notFoundHandler = (err, req, res, next) => {
  if (err.status !== 404) {
    return next(err)
  }

  res.status(404)
  return res.send({
    status: 404,
    error: err.message || "These are not the snakes you're looking for",
  })
}

const genericErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500

  res.status(statusCode)
  return res.send({
    status: statusCode,
    error: err.message,
  })
}

module.exports = {
  fallbackHandler,
  notFoundHandler,
  genericErrorHandler,
  poweredByHandler,
}
