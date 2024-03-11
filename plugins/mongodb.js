import fp from 'fastify-plugin'
import mongoose from 'mongoose'

async function mongodb (fastify, opts) {
  const { MONGO_URI } = fastify.config
  await mongoose.connect(MONGO_URI)

  /** decorate your mongo service of your models here
  * @example fastify.decorate(userService, 'userService')
  */

  fastify.addHook('onClose', (instance, done) => {
    mongoose.disconnect()
    done()
  })
}

export default fp(mongodb, {
  name: 'mongodb'
})
