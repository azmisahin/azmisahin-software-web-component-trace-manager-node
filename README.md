# trace-manager
The code architecture allows a simple method to be monitored.

# Install

```shell
$ npm i -g npm
$ npm i --save trace-manager
```

# Usage

```js
/// Trace Manager
var TraceManager = require('trace-manager')

/// Trace Instance
var t = new TraceManager()

/// Sample
t.Debug('Any Debug Message')
t.Info('Any Info Message')
t.Warning('Any Warning Message')
t.Error('Any Error Message')
```

# Test

```shell
$ npm run test
```

# Pipelines
[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-trace-manager-node/_apis/build/status/azmisahin.azmisahin-software-web-component-trace-manager-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-trace-manager-node/_build/latest?definitionId=9?branchName=master)

[![NPM](https://nodei.co/npm/trace-manager.png)](https://nodei.co/npm/trace-manager/)
