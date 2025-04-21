function createResponse(status, message = '', success, payload = null) {
  const response = {
    success,
  }

  if (message) response.message = message
  if (payload) response.payload = payload

  return {
    status,
    json: response,
  }
}

function handleError(statusCode, message) {
  const error = new Error()
  error.statusCode = statusCode
  error.message = message

  return error
}

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials: true,
}

module.exports = { createResponse, handleError, corsOptions }
