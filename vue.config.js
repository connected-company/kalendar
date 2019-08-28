module.exports = {
  parallel: false,
  chainWebpack: (config) => {
    config.output
      .globalObject('this')
    config.module.rule('worker')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('worker-loader')
      .tap(options => {
        return {
          inline: true
        };
      })
      .end()
  },
};