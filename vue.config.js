module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue/notes/'
    : '/vue/notes/',
  assetsDir: 'assets',
  productionSourceMap: false,
  filenameHashing: true
}
