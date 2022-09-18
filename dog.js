function Dog(name){
	this.name = name;
	this.stomach = true;
}

Dog.prototype.food = function(meat){
	this.food = meat;
}

Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is ' + this.name)
}

module.exports = Dog;
