var Queue = function(){
	
  var newQueue = {};
  newQueue.storage = {};
	newQueue.queueSize = 0;
	_.extend(newQueue, queueMethods);

	return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	for(var i=this.queueSize; i>0; i--) {
		this.storage[i] = this.storage[i-1];
	}
	this.storage[0] = value;
	this.queueSize++;
};

queueMethods.dequeue = function() {
	if(this.queueSize>0) {
		this.queueSize--;
		var retValue = this.storage[this.queueSize];
		delete this.storage[this.queueSize];
		return retValue;
	}
};

queueMethods.size = function() {
	return this.queueSize;
};