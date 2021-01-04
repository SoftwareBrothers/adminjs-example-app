/* eslint-disable global-require */
if (process.env.HAPI === 'true') {
  require('./hapijs');
} else {
  require('./express');
}
