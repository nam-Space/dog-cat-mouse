var Cat = require('./cat')
var Mouse = require('./Mouse')
var Dog =require('./dog')

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog('ScobyDoo');

try {
    cat.eat(dog)
} catch (error) {
    console.log('Cat cannot eat dog!')
}
console.log(cat)