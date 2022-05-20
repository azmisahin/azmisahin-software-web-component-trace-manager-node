/**
 * Example application
 */

// package define
const TraceManager = require('../src')

// module instance
var tm = new TraceManager()

// any data
let data = [{ data: 'any' }]

// usage
tm.trace('trace', ...data)
tm.debug('debug', ...data)
tm.info('info', ...data)
tm.warn('warn', ...data)
tm.error('error', ...data)
tm.verbose('verbose', ...data)