module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    config
      .output
        .libraryTarget('amd');
  }
}