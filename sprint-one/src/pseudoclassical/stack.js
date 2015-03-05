var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.stackSize] = value;
	this.stackSize++;
};

Stack.prototype.pop = function() {
	if(this.stackSize > 0) {
		this.stackSize--;
		var value = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		return value;
	}
};

Stack.prototype.size = function() {
	return this.stackSize;
};
