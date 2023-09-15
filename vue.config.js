const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'index': {
      entry:'./src/pages/Home/main.js',
      template:'public/index.html',
      title:'Home',
      chuncks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'paintings': {
      entry:'./src/pages/Paintings/main.js',
      template:'public/index.html',
      title:'Paintings',
      chuncks: ['chunk-version', 'chunk-common', 'about']
    }
  }
})
