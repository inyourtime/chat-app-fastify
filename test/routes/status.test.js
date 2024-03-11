import { test } from 'tap'
import { build } from '../helper.js'
import { readFileSync } from 'fs'
import { join } from 'path'

test('status is loaded', async (t) => {
  const app = await build(t)

  const { version } = JSON.parse(
    readFileSync(join(new URL('.', import.meta.url).pathname, '../../package.json'))
  )

  const res = await app.inject({
    url: '/api/v1/status'
  })
  t.same(JSON.parse(res.payload), { status: 'ok', version })
})
