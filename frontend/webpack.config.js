module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
        },
      },
      disableHostCheck: true,
      compress: true,
  public: 'https://mernapp-1-9mwd.onrender.com/' // That solved it
    },
  };