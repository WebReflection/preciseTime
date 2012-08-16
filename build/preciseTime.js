/*! (C) WebReflection - Mit Style License
 *  thanks @jdalton for different hints
 *  https://github.com/WebReflection/preciseTime
 * --------------------------------------------- */

// JSC has it right, kudos!
(typeof preciseTime == "undefined" && function(exports){
  var preciseTime, nanoTime;
  try {
    // W3C + does it work ?
    // Aurora exposes it right now but it does not work for me
    (preciseTime = Performance.now)();
  } catch(o_O) { try {
      // apparently few browsers support this
      (preciseTime = performance.now)();
    } catch(o_O) { try {
        // Chrome exposes lowercase performance
        // with a prefixed webkitNow method
        (preciseTime = performance.webkitNow)();
      } catch(o_O) { try {
          // node.js process.hrtime + does it work ?
          nanoTime = function () {
            return parseFloat(process.hrtime().join("."));
          };
          (preciseTime = nanoTime)();
        } catch(o_O) { try {
            // node.js via microtime module + does it work ?
            (preciseTime = require("microtime").nowDouble)();
          } catch(o_O) { try {
              // Rhino + does it work ?
              nanoTime = java.lang.System.nanoTime;
              (preciseTime = function preciseTime() {
                return nanoTime() / 1000000000;
              })();
            } catch(o_O) {
              // browsers or fallback ... it works
              preciseTime = function preciseTime() {
                return new Date / 1000;
              };
            }
          }
        }
      }
    }
  }
  exports.preciseTime = preciseTime;
}(this));