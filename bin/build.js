const postman_to_openapi_clients = require('@mculp/postman-to-openapi-clients')
const yaml = require('js-yaml')
const fs = require('fs')

const postman_definition = $0
const postman_json = require(`../postman-definitions/${postman_definition}.json`)

const openapi_json = postman_to_openapi_clients(postman_json, { info: { version: 'v1' } })

let output = yaml.safeDump(openapi_json)

fs.writeFileSync(`../openapi-schemas/${postman_definition}.yaml`, output, 'utf8')
