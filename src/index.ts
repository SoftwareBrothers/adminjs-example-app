import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

switch (process.env.SERVER) {
  default:
  case 'EXPRESS':
    await import('./servers/express/index.js');
    break;
  case 'HAPIJS':
    await import('./servers/hapijs.js');
    break;
  case 'FASTIFY':
    await import('./servers/fastify.js');
    break;
  case 'NESTJS':
    await import('./servers/nestjs/index.js');
    break;
}
