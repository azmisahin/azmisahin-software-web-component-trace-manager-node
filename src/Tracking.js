'use strict'

/**
 * @file
 * Tracking.
 */

/**
 * Trace
 *
 * the process of following
 *
 * @example
 *
 *  // module instance
 *  trace = new Tracking()
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
 * Trace
 */
class Tracking {
  /**
   * Tracing
   */
  constructor() {
    /**
     * @private
     */
    this._types = []

    /**
     * Console Message Type
     */
    this._types['trace'] = '\x1b[34m%s\x1b[0m'
    this._types['debug'] = '\x1b[35m%s\x1b[0m'
    this._types['info'] = '\x1b[36m%s\x1b[0m'
    this._types['warn'] = '\x1b[33m%s\x1b[0m'
    this._types['error'] = '\x1b[31m%s\x1b[0m'
    this._types['log'] = '\x1b[37m%s\x1b[0m'
  }

  /**
   * Emit
   * @param {string} messageType Message Type
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   *
   * @private
   */
  emit(messageType, message, data) {
    // current date
    let timestamp = new Date().toLocaleString()

    // parameter
    let value = `${timestamp} [${messageType[0]}] ${message}`

    let result = data
      ? // eslint-disable-next-line no-console
      console[messageType](this._types[messageType], value, data)
      : // eslint-disable-next-line no-console
      console[messageType](this._types[messageType], value)

    // operation
    return result || message
  }

  /**
   * Report
   * 10
   * @param {array} data Table Array
   */
  report(data) {
    return process.env.SWICH_TRACKING_REPORT === 'true'
      ? // eslint-disable-next-line no-console
      console.table(data)
      : this
  }

  /**
   * Trace
   * 100
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  trace(message, data) {
    return process.env.SWICH_TRACKING_TRACE === 'true' ? this.emit('trace', message, data) : this
  }

  /**
   * Verbose
   * 1000
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  verbose(message, data) {
    return process.env.SWICH_TRACKING_VERBOSE === 'true' ? this.emit('log', message, data) : this
  }

  /**
   * Debug
   * 10000
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  debug(message, data) {
    return process.env.SWICH_TRACKING_DEBUG === 'true' ? this.emit('debug', message, data) : this
  }

  /**
   * Info
   * 20000
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  info(message, data) {
    return process.env.SWICH_TRACKING_INFO === 'true' ? this.emit('info', message, data) : this
  }

  /**
   * Warn
   * 30000
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  warn(message, data) {
    return process.env.SWICH_TRACKING_WARN === 'true' ? this.emit('warn', message, data) : this
  }

  /**
   * Error
   * 40000
   * @param {string|object|Array|JSON} message Message
   * @param {any} data data
   */
  error(message, data) {
    return process.env.SWICH_TRACKING_ERROR === 'true' ? this.emit('error', message, data) : this
  }
}

/**
 * Tracking System
 * @module tracking
 */
module.exports = Tracking
