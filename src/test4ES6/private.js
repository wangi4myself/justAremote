'use strict';
class MyClass {
  constructor(value) {
    console.log("value+++++")
    this.value=value;
  }
  get prop() {
    console.log('getter: '+this.value);
    return this.value;
  }
  set prop(value) {
    this.value=value;
    console.log('setter :'+this.value);
  }
  sayName () {
        console.log(this.value);
    }
}

let inst = new MyClass('234');
// inst.sayName()
inst.prop = 123;
// inst.prop;

// inst.prop = 123;
