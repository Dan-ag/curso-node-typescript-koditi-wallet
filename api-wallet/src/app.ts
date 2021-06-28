import { config } from 'dotenv'
import express from 'express'
import path from 'path'

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.APP_ENV = process.env.APP_ENV || 'dev'

config({
  path: path.join(__dirname, '../config', `${process.env.APP_ENV}.env`)
})

import loadContainer from './container'

import { loadControllers } from 'awilix-express'


console.log(`process.env`, process.env.db_mysql_user)

const app: express.Application = express()

// JSON Support
app.use(express.json());

// CORS Support
// app.use(cors());

// Container
loadContainer(app)

app.use(loadControllers('./controllers/*.ts', { cwd: __dirname }))

export default app
