// copy and paste build/preciseTime here

/*! (C) WebReflection - Mit Style License
 *  thanks @jdalton for different hints
 *  https://github.com/WebReflection/preciseTime
 * --------------------------------------------- */

!function(exports, preciseTime){
  // JSC has it right, kudos!
  if (!exports.preciseTime) {
    // all possibilities + inline "does it work?" check
    try {
      // W3C Performance instance
      (preciseTime = function preciseTime() {
        return performance.now();
      })();
    } catch(o_O) {try {
      // Chrome exposes it via prefixed method
      (preciseTime = function preciseTime() {
        return performance.webkitNow();
      })();
    } catch(o_O) {try {
      // node.js v0.8+ process.hrtime
      (preciseTime = function preciseTime() {
        return parseFloat(process.hrtime().join("."));
      })();
    } catch(o_O) {try {
      // node.js via microtime module
      (preciseTime = function preciseTime() {
        return require("microtime").nowDouble();
      })();
    } catch(o_O) {try {
      // Rhino
      (preciseTime = function preciseTime() {
        return java.lang.System.nanoTime() / 1000000000;
      })();
    } catch(o_O) {try {
      // IE via IEJST https://github.com/kentaromiura/IEJST
      (preciseTime = function preciseTime(){
        return +exports.external.preciseTime();
      })();
    } catch(o_O) {
      // browsers or fallback
      // if this throw, this is not a JS env ...
      (preciseTime = function preciseTime() {
        return new Date / 1000;
      })();
    }}}}}}
    exports.preciseTime = preciseTime;
  }
}(this);

// since this supposes to work with too many envs

var t = [+new Date / 1000, this.preciseTime()];
try {
  console.log(t);
} catch(o_O) {
  try {
    alert(t);
  } catch(o_O) {
    print(t);
  }
}