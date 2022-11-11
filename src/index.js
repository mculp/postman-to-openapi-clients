const dotenv = require('dotenv')
require('dotenv').config()

const ConvertToOpenAPI = require(`${__dirname}/convert_to_openapi.js`)

const defaults = {
  source_spec: "postman2.1",
  target_spec: "openapi3.0",
  require_all: ["headers", "body", "query", "path"],
  omit: {
    headers: ["Content-Type", "X-Requested-With"]
  },
  info: {},
  host: null,
  basepath: null,
  schemes: null,
  responses: {
    200: {
      description: "OK"
    }
  }
}

module.exports = (source, options) => {
  options = options || {}
  let config = Object.assign({}, defaults, options)
  let output

  try {
    output = ConvertToOpenAPI(source, config)
  }
  catch {
    throw new Error(`Error generating ${source} -- ${options}`)
  }

  return output
}
