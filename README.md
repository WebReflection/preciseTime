preciseTime
===========

JavaScriptCore has a handy global function called `preciseTime()` which aim is to provide a double, based on time, precise enough to ensure microseconds, but not as greedy as Java nanoTime in therms of clock.
This precision has been [proposed in W3C](http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/HighResolutionTime/Overview.html#performance) but is not available yet.

Since JSC offers this natively, the aim of this little script is to normalize this function that specially when it comes to benchmarks or asynchronous queue ordered by execution time, could be all we need.

The *node.js* version might require [microtime](https://github.com/wadey/node-microtime) if `process.hrtime()` is not supported.
I have not set the dependency since that module has bindings and it might be more problematic to install.

Browsers that do not implement *HighResolutionTime* will simply return `new Date / 1000` to be consistent with other results.

How To Use
----------

  * in *node.js* `npm install precisetime` then `var preciseTime = require("precisetime").preciseTime`
  * in *Rhino* just load/include the precisetime.js file inside the build folder
  * in *JSC* you don't need to do anything
  * in browsers or other envs, load/require/include precisetime.js inside the build

This is pretty much it