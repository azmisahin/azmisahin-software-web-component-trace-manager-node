const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const TraceManager = require('../../src')

// instance
var tm = new TraceManager()

When('{string} method is called with {string} message', function (methodName, message) {
  this.actual = tm[methodName](message)
})

Then('it should write {string} message in console"', function (expected) {
  assert.equal(this.actual, expected)
})
