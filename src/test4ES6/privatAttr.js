let _name = Symbol('name');
let _age = Symbol('age');
class Person {
    constructor(name,age) {
        this[_name] = name='hahah';//将私有方法设置成固定值
        this[_age]=age;
    }

    get name() {
        return this[_name];
    }
    get age() {
        return this[_age];
    }
}


let pp=new Person('jin','22');
pp.name='wang';
pp.age='233';
console.log(pp.age);
console.log(pp.name);
// let haha=new Person('jin2');
// haha.name='wang2';
// console.log(haha.name);
// console.log(pp);
