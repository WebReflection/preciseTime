/*! (C) WebReflection - Mit Style License
 *  thanks @jdalton for different hints
 *  https://github.com/WebReflection/preciseTime
 * --------------------------------------------- */

!function(exports){
  var preciseTime = exports.preciseTime;
  if ('external' in exports && 'preciseTime' in exports.external){
  // wraps cause window.external can't be directly referenced.
    preciseTime = exports.preciseTime = function(){
      return exports.external.preciseTime();
    }
  }
  // JSC has it right, kudos!
  if (!preciseTime) {
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
    } catch(o_O) {
      // browsers or fallback
      // if this throw, this is not a JS env ...
      (preciseTime = function preciseTime() {
        return new Date / 1000;
      })();
    }}}}}
    exports.preciseTime = preciseTime;
  }
}(this);