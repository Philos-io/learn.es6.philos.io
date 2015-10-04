// User class definition



var User = class UserDef{
  constructor() {

  }

  run(){
    console.log('is running', UserDef);
  }
}




var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
console.log(instance.bar());
Foo.name; // "Foo"
console.log(Foo.name);

export default Foo;
