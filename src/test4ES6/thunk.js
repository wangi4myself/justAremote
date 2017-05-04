// var thunk = function () {
//   return x + 5;
// };
var Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};

// function f(thunk) {
//   return function(...args){
//     thunk * 2;
//   }
// }
function f(x, eee) {
  eee(x+1);
}

let ft = Thunk(f);

let log = console.log.bind(console);
ft(1)(log) // 1
