'use strict'
// {
//   var a=1;
//   let b=22;
//   console.log(a,b);
// }
// {
//   let a;
//   let a;
// }
//立即执行函数   所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。
// var a=[11];
// var config=function(){
//   a.push(1);
//   a.push(2);
//   a.push(3);
//   return a;
// };
// console.log(config());
// function a(){
//   console.log(1);
// }
//
// function f(){
//   a();
//   if(false){
//     function a(){
//       console.log(2)
//     }
//   }
// }
// f();
var arr=[];
function f(){
  for(var i=0;i<5;i++){
    arr.push(function(){
      console.log(i);
    })
  }
}

f();
console.log(arr[1]());
//const ,對物理内存地址不可修改
const a={
  name:'wang'
};

Object.freeze(a);
a.name='leo';
