// assert library
const assert = require('assert').strict

// Target condination.
const target = 'TrackingManager'
const Tracking = require('../../src/Tracking')
const TrackingManager = require('../../src')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let template

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // template instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    template = new TrackingManager()

    // mock
    let _parameters = Tracking

    // parameters
    let expected = _parameters

    // operation
    let result = template

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
