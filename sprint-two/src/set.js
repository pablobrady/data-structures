// The Set constructor creates an object from the 
//  methods in the setPrototype object.
// 
var Set = function(){
  var newSet = Object.create(setPrototype);
  newSet._storage = {};
  return newSet;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
	return !!this._storage[item];
};

setPrototype.remove = function(item){
	delete this._storage[item];
};

