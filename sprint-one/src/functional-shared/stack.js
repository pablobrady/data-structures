var Stack = function() {

  var newStack = {};
  newStack.stackSize = 0;
  newStack.storage = {};
  _.extend(newStack ,stackMethods);
  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value){
  
  this.storage[this.stackSize] = value;
  this.stackSize++;

};

stackMethods.pop = function(){
  
  if(this.stackSize > 0){
  	this.stackSize--;
	  var value = this.storage[this.stackSize];
	  delete this.storage[this.stackSize];
	  return value;
	}

};

stackMethods.size = function(){
  return this.stackSize;
};