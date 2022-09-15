function Mouse(){
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.dead = function(){
	this.isDead = true;
}

export default Mouse;
