'use strict'
//ES5
function User(name,age){
  this.name=name;
  this.age=age;
}
//靜態方法
User.getClassName=function(){
  return 'User';
}

User.prototype.changeName=function(name){
  this.name=name;
}

User.prototype.changeAge=function(age){
  this.age=age;
}

Object.defineProperty(User.prototype,'info',{
  get(){
    return 'name:'+this.name+'|age:'+this.age;
  }
})
//子類
function Manager(name,age,password){
  User.call(this,name,age);
  this.password=password;
}
//繼承靜態方法
Manager._proto_=User;
//繼承prototype方法
Manager.prototype=User.prototype;
//添加新方法
Manager.prototype.changePassword=function(password){
  this.password=password;
}

var man=new Manager('wang','22','1111');
console.log(man.info);
