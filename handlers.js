/**
 * Don't worry about anything in this file,
 * focus on writing your snake logic in index.js endpoints.
 */

// CustomError class courtesy of https://medium.com/@xjamundx/custom-javascript-errors-in-es6-aa891b173f87
class CustomError extends Error {
  constructor(m = '', options = { status }) {
    super(m)
    Error.captureStackTrace(this, CustomError)

    // Allow to set a custom status code
    this.status = options.status || 500
  }
}

const poweredByHandler = (_, res, next) => {
  res.setHeader('X-Powered-By', 'Battlesnake')
  next()
}

const fallbackHandler = (req, res, next) => {
  // Root URL path
  if (req.baseUrl === '') {
    res.status(200)
    return res.send({ message: 'Your Battlesnake is alive!' })
  }

  // Short-circuit default browser favicon requests
  if (req.baseUrl === '/favicon.ico') {
    res.set({ 'Content-Type': 'image/x-icon' })
    res.status(200)
    res.end()
    return next()
  }

  // Reroute all 404 routes to genericErrorHandler
  const err = new CustomError('Not found', { status: 404 })
  return next(err)
}

const genericErrorHandler = (err, _, res, next) => {
  if (err.status === 404) {
    res.status(404)
    return res.send({
      status: 404,
      error: err.message || "These are not the snakes you're looking for"
    })
  }

  const { status } = err

  // Express swallows the error stack so we make sure to output it here
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack)
  }

  res.status(status)
  return res.send({
    error: err,
    status
  })
}

module.exports = { fallbackHandler, genericErrorHandler, poweredByHandler }
