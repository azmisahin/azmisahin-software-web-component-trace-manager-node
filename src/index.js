var Writer = require('./writer')

/**
 * Trace Managaer
 *
 * Simple Trace Managament
 *
 * @author Azmi ŞAHİN
 * @since 2018
 * */
class TraceManager {

  /**
   * @example
   *
   * /// Trace Manager
   * var TraceManager = require('trace-manager')
   *
   * /// Trace Instance
   * var t = new TraceManager()
   *
   * /// Sample
   * t.Debug('Any Debug Message')
   * t.Info('Any Info Message')
   * t.Warning('Any Warning Message')
   * t.Error('Any Error Message')
   *
   * @returns message
   * */
  constructor() {
  }

  /**
   * Debug Message
   * @param {string} message Debug
   */
  Debug(message) {
    return new Writer(message, 'Debug')
  }

  /**
   * Info Message
   * @param {string} message Info
   */
  Info(message) {
    return new Writer(message, 'Info')
  }

  /**
   * Warning Message
   * @param {string} message Warning
   */
  Warning(message) {
    return new Writer(message, 'Warning')
  }

  /**
   * Error Message
   * @param {string} message Error
   */
  Error(message) {
    return new Writer(message, 'Error')
  }
}

module.exports = TraceManager
