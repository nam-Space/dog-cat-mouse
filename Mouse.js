function Mouse(name){
	this.name = name
	this.isDead = false;
}

Mouse.prototype.dead = function(){
	this.isDead = true;
}

module.exports = Mouse;
