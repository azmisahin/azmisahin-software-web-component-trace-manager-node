'use strict'
// dependencies
const Tracking = require('./Tracking')

/**
 * @file
 * Tracking Manager.
 */

/**
 * Trace
 *
 * the process of following
 *
 * @example
 *
 *  // module instance
 *  trace = new TrackingManager()
 *
 *  // operation
 *  trace.trace("message", ...data)
 *  trace.debug("message", ...data)
 *  trace.info("message", ...data)
 *  trace.warn("message", ...data)
 *  trace.error("message", ...data)
 *  trace.verbose("message", ...data)
 *
 * @class
 * Tracking Manager
 * @returns <Tracking>
 */
class TrackingManager {
  /**
   * Tracing
   *
   * @returns Tracking
   */
  constructor() {
    // allow the class to have only one instance
    if (!TrackingManager.trace) {
      TrackingManager.trace = new Tracking()
    }

    return TrackingManager.trace
  }
}

/**
 * Tracking System
 * @module TrackingManager
 */
module.exports = TrackingManager
