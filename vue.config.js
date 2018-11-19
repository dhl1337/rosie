module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: (config) => {
    config
      .output
        .libraryTarget('amd');
  }
}