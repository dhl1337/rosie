module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: { 
    extract: false
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    config
      .output
        .libraryTarget('amd');
  }
}