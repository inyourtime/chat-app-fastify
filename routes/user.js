import { S } from 'fluent-json-schema'

export const autoPrefix = '/user'

export default async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    path: '',
    schema: {
      description:
        'Route used by the frontend app to validate the session' +
        ' and retrieve the CSRF token.',
      tags: ['User'],
      response: {
        200: S.object().prop('user', S.object().prop('name', S.string()))
      }
    },
    handler: async (req, reply) => {
      return {
        user: {
          name: 'Hola boat'
        }
      }
    }
  })
}
