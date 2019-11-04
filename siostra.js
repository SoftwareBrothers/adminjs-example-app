const cluster = require('cluster');
const chokidar = require('chokidar')
const ora = require('ora')

process.env.BABEL_DISABLE_CACHE = true

const checkPath = (path, options = {}) => {
  if (path.match(/\/node_modules\//)) {
    return false
  }
  return true
}

module.exports = async function(toReload, options = {}) {
  const watch = options.watch || './src'
  const debug = options.debug
  const debuger = debug ? console.log : function() {}
  const once = options.once || function() {}

  if (cluster.isMaster) {
    await once()
    cluster.fork()
    const spinner = ora()
    spinner.info('Siostra is watching...')
    chokidar.watch(watch).on('all', (event, at) => {
      if (event === 'add') {
        debuger('Watching for', at);
      }
      if (event === 'change') {
        const hrstart = process.hrtime()
        Object.keys(require.cache).forEach((path) => {
          if (checkPath(path)) {
            delete require.cache[path];
          }
        });
        console.info('InvalidCache: %dms', process.hrtime(hrstart)[1] / 1000000)
        spinner.start('Realoading...')
        const start = new Date()
        let newWorker = cluster.fork();
        console.info('afterFork: %dms', process.hrtime(hrstart)[1] / 1000000)
        newWorker.once('listening', function () {
          console.info('listening: %dms', process.hrtime(hrstart)[1] / 1000000)
          for(var id in cluster.workers) {
            if (id === newWorker.id.toString()) continue;
            cluster.workers[id].kill('SIGTERM');
          }
          console.info('kill: %dms', process.hrtime(hrstart)[1] / 1000000)
          const end = new Date() - start
          spinner.succeed(`Reloaded in ${Math.round(end/10)/100}s`)
        });
      }
    });
  } else {
    await toReload()
  }
}