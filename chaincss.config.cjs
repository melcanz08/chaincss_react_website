// Project development Configuration
module.exports = {
  atomic: {
    enabled: true,
    threshold: 3,
    naming: 'hash',
    cache: true,
    cachePath: './.chaincss-cache',
    minify: true
  },
  prefixer: {
    mode: 'auto',
    browsers: ['> 0.5%', 'last 2 versions', 'not dead'],
    enabled: true,
    sourceMap: true,
    sourceMapInline: false
  }
};
