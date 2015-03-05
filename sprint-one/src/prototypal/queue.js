var Queue = function() {
	var newQueue = Object.create(queueMethods);
	newQueue.queueSize = 0;
	newQueue.storage = {};
	return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	for (var i = this.queueSize; i > 0; i--) {
		this.storage[i] = this.storage[i-1];
	};
	this.storage[0] = value;
	this.queueSize++;
};

queueMethods.dequeue = function() {
	if(this.queueSize>0) {
		this.queueSize--;
		var value = this.storage[this.queueSize];
		delete this.storage[this.queueSize];
		return value;
	}
};

queueMethods.size = function() {
	return this.queueSize;
};


