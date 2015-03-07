// Our Graph constructor.  
// Creates a list, which holds all of our nodes.
var Graph = function(){
  this.list = {};
};

//each node is a key in our this.list object.
//the value of each node starts as an empty array.
//that array is later populated with pointers to connected nodes.
Graph.prototype.addNode = function(node){
  this.list[node] = [];  
};

// Checks if a node exists in the graph, and return a boolean.
Graph.prototype.contains = function(node){
  return !!this.list[node];
};

//Deletes a specified node, and removes all references from other nodes
Graph.prototype.removeNode = function(node){
	for(var i=0; i<this.list[node].length; i++){
		var linkName = this.list[node][i];
    deleteTarget(this.list[linkName], node);
	}
	delete this.list[node];
};

// EDGE FUNCTIONS
// Deal with connected and de-connecting nodes to each other

// Checks if two nodes are connected.  Returns a boolean.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i=0; i<this.list[fromNode].length; i++){
  	if(this.list[fromNode][i] === toNode){
  		return true;
  	}
  }
	return false;
};

// Adds a connection between two nodes by adding a pointer
// in each other's pointer arrays.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.list[fromNode].push(toNode);
	this.list[toNode].push(fromNode);
};

// Removes a connection between two nodes by finding and
// deleting the pointers that specify the input nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  deleteTarget(this.list[fromNode], toNode);
  deleteTarget(this.list[toNode], fromNode);
};

// Runs a function on each node.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.list){
  	key = cb(key);
  }
};

// Takes a pointer list to search through, and a target name to delete.
var deleteTarget = function(list, target){
  for(var i=0; i<list.length; i++){
  	if(list[i] === target){
  		return list.splice(i,1);
  	}
  }
}