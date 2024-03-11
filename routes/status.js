import { readFileSync } from 'fs'
import { join } from 'path'
import { S } from 'fluent-json-schema'

const { version } = JSON.parse(
  readFileSync(join(new URL('.', import.meta.url).pathname, '../package.json'))
)

export const autoPrefix = '/status'

export default async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    path: '',
    handler: onStatus,
    schema: {
      // The description field will be used by the swagger
      // generator to describe the route.
      description: 'Returns status and version of the application',
      tags: ['Status'],
      response: {
        // You can define different schemas
        // based on the response status code.
        // Be aware that if you are using a response
        // schema and you don't define property, this property
        // will not be serialized in the final response, even if you
        // are returing it in your route handler.
        200: S.object()
          .prop('status', S.string())
          .prop('version', S.string())
      }
    }
  })

  async function onStatus (req, reply) {
    return { status: 'ok', version }
  }
}
