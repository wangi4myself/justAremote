class A {
}

class B extends A {
}
let b=new B();
// console.log(b.__proto__);// B {}

// console.log(b);// B {}
//
// console.log(b instanceof B);// true
//
// console.log(B);// [Function: B]
//
// console.log(B.__proto__ );// [Function: A]
//
// console.log(A.__proto__ );//[Function]
B.__proto__ === A // true
B.prototype.__proto__ === A.prototype
console.log(B.prototype);//B {}
