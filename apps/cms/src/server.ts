import express from 'express'
import path from 'path'
import payload from 'payload'

import { seed } from './seed'

// eslint-disable-next-line
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
})

const app = express()

app.get('/', (_, res) => {
  res.redirect('/admin')
})

const PORT = process.env.CMS_PORT

const start = async ({ port }: { port: string }): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_PUBLIC_SEED === 'true') {
    payload.logger.info('---- SEEDING DATABASE ----')
    await seed(payload)
  }

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

start({ port: PORT })
