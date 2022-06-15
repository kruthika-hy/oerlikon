exports.config = {
  tests: './*.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    commonFunctions: `./pages/common_functions.js`,
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}