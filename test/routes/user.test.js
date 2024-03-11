import { test } from 'tap'
import { build } from '../helper.js'

test('user is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/api/v1/user'
  })
  t.same(JSON.parse(res.payload), { user: { name: 'Hola boat' } })
})
