
  // require('./siostra')(() => {
    if (process.env.ADMIN_BRO_DEV_ENV) {
      require('@babel/register')({
        presets: [
          require.resolve('@babel/preset-react'),
          require.resolve('@babel/preset-env'),
          require.resolve('@babel/preset-typescript'),
        ],
        plugins: [require.resolve('babel-plugin-styled-components')],
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
        only: ["../admin-bro/src", "./typeorm/index.ts", "./admin"],
      })
    }

    require('./hapijs')

  //   }, {
  //   watch: ['./admin', '../admin-bro/src'],
  // })