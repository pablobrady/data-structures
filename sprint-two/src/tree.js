var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push( Tree(value) );

};

treeMethods.contains = function(target){
	var result = false;
	var searchChildren = function (tree) {
		if (tree.value === target) {
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


/*
 * Complexity: What is the time complexity of the above functions?
 */

