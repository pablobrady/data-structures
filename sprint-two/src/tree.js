var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods); 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push( Tree(value) );
};

treeMethods.contains = function(valToFind){
	var result = false;
	var searchChildren = function (tree) {
		if (tree.value === valToFind) {
			result = true;
		};
		var children = tree.children;
		for (var i = 0; i < children.length; i++) {
			searchChildren(children[i]);
		}
	}
	searchChildren(this);
	return result;
};
