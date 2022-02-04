require('dotenv').config();
if (process.env.EXPRESS === 'true') {
  require('./servers/express')
} else {
  require('./servers/hapijs')
}
