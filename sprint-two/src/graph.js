

var Graph = function(){
  this.list = {};
};

Graph.prototype.addNode = function(node){
  this.list[node] = [];
};

Graph.prototype.contains = function(node){
	for(var key in this.list){
		if(key === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var i=0; i<this.list[node].length; i++){
		var linkName = this.list[node][i];
    deleteTarget(this.list[linkName], node);
	}
	delete this.list[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i=0; i<this.list[fromNode].length; i++){
  	if(this.list[fromNode][i] === toNode){
  		return true;
  	}
  }
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.list[fromNode].push(toNode);
	this.list[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  deleteTarget(this.list[fromNode], toNode);
  deleteTarget(this.list[toNode], fromNode);
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.list){
  	key = cb(key);
  }
};

var deleteTarget = function(list, target){
  for(var i=0; i<list.length; i++){
  	if(list[i] === target){
  		return list.splice(i,1);
  	}
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
