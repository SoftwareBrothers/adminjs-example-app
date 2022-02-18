require('dotenv').config()

if (process.env.EXPRESS === 'true') {
  require('./express')
} else {
  require('./hapijs')
}