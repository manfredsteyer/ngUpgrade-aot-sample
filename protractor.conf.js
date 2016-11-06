exports.config = { 
  directConnect: true, 

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['tests/e2e/**/*.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 30000
  }
};
