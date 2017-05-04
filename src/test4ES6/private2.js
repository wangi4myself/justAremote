let _name = Symbol('_name');

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    set name (name) {
        this._name = name;
    }
    get name () {
        return this._name;
    }

    // 加一个成员方法
    sayName () {
        console.log(this.name);
    }
}

var p = new Person("zhang", 25);
console.log(p._name);
