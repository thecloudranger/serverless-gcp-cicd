const gcfExpressApp = require('gcf-express-app')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('Hello. I\'m alive.'))

exports.testExpressApp = gcfExpressApp(app)