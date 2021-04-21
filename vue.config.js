module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/economic-charts-fusioncharts/'
    : '/'
  ,
  transpileDependencies: [
    'vuetify'
  ]
}
