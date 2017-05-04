// function Animal(name){
//     this.name = name;
//     this.showName = function(){
//         console.log(this.name);
//     }
// }
//
// function Cat(name){
//     Animal.call(this, name);
// }
//
// var cat = new Cat("Black Cat");
// cat.showName();

//方法还是call之前的，只不过此时指针变成call之后的了
var func=new function(){this.b="func22"}
var myfunc = function(x) {
    var a = "myfunc";
    console.log(this.a);
    console.log(x);
}
myfunc.call(func, "var");

function thunkify(fn) {
  return function() {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;

      args.push(function () {
        //回掉函数之执行
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};

var f=function f1(a, b, callback){
  var sum = a + b;
  callback(sum);
  callback(sum);
  callback(sum);
  // console.log(sum);
}

var ft = thunkify(f);
var print = console.log.bind(console);
ft(1, 2)(print);
