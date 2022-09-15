function Dog(){
	this.stomach = true;
}

Dog.prototype.food = function(meat){
	this.food = meat;
}

export default Dog
