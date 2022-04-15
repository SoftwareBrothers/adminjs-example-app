require('dotenv').config({
  path: `${process.cwd()}/.env`,
});

switch (process.env.SERVER) {
  default:
  case 'EXPRESS':
    require('./servers/express');
    break;
  case 'HAPIJS':
    require('./servers/hapijs');
    break;
  case 'FASTIFY':
    require('./servers/fastify');
    break;
  case 'NESTJS':
    require('./servers/nestjs');
    break;
}
