//function world() {
//    console.log('Hello, world')
//}

function Hello() {
  var name;
  this.setName = function(name) {
    this.name = name;
  };
  this.sayHello = function() {
    console.log("Hello " + this.name);
  };
}

//exports.world = world
module.exports = Hello;
