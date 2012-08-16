// copy and paste build/preciseTime here

/*! (C) WebReflection - Mit Style License
 *  https://github.com/WebReflection/preciseTime
 * --------------------------------------------- */

 // JSC has it right, kudos!
 (typeof preciseTime == "undefined" && function(exports){
   var preciseTime;
   try {
     // W3C + does it work ?
     // Aurora exposes it right now but it does not work in any case
     (preciseTime = Performance.now)();
   } catch(o_O) {
     try {
       // Chrome exposes lowercase performance
       // with a prefixed webkitNow method
       (preciseTime = performance.webkitNow)();
     } catch(o_O) {
       try {
         // node.js via microtime module + does it work ?
         (preciseTime = require("microtime").nowDouble)();
       } catch(o_O) {
         try {
           // Rhino + does it work ?
           var nanoTime = java.lang.System.nanoTime;
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
   exports.preciseTime = preciseTime;
 }(this));

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