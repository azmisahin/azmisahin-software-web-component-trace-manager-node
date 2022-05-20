/**
 * Example application
 */

// package define
const TraceManager = require('../src')

// module instance
var t = new TraceManager()

// usage
t.Debug('Any Debug Message')
t.Info('Any Info Message')
t.Warning('Any Warning Message')
t.Error('Any Error Message')