'use strict';
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getClassName() {
        return 'User';
    }

    changeName(name) {
        this.name = name;
    }

    changeAge(age) {
        this.age = age;
    }

    get info() {
        return 'name:' + this.name + '|age:' + this.age;
    }
}

class Manager extends User{
  constructor(name,age,password){
    super(name,age);
    this.password=password;
  }

  changePassword(password){
    this.password=password;
  }
}

var man=new Manager('wang','22','1111');
console.log(man.info);
