// test/test_index.js

// require all modules ending in "_test" from the
// current directory and all subdirectories
var testsContext = require.context("../src/controls", true, /.test$/);
testsContext.keys().forEach(testsContext);
