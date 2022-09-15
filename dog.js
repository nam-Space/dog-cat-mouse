var chalk = require('chalk')

function Dog(){
	this.stomach = true;
}

Dog.prototype.food = function(meat){
	this.food = meat;
}

Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is ' + chalk.red(this.name))
}

module.exports = Dog;
