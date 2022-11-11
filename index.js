const dotenv = require('dotenv')
require('dotenv').config()

const postman_to_openapi_clients = require('@mculp/postman-to-openapi-clients')
const yaml = require('js-yaml')
const fs = require('fs')

const postman_definitions = './postman-definitions'
const postman_schema = require(`./postman-definitions/${process.env.POSTMAN_SCHEMA}`)

const openapi_json = postman_to_openapi_clients(postman_schema, { info: { version: 'v1' } })

let output = yaml.safeDump(openapi_json)

// Save to file
fs.writeFileSync(`./openapi-schemas/${process.env.POSTMAN_SCHEMA}.yaml`, output, 'utf8')
