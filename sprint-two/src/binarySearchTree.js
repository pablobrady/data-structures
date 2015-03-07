var BinarySearchTree = function(value){
	var newTree = Object.create(binTreeMethods);
	newTree.value = value;
	newTree.left;
	newTree.right;
  return newTree;
};


var binTreeMethods = {};

binTreeMethods.insert = function(valToInsert){

  var insertValue = function(tree, newValue){
  	if(newValue < tree.value){
  		if(tree.left){
  	    insertValue(tree.left, newValue);
  		}else{
  	    tree.left = new BinarySearchTree(newValue);
  		}
  	}else{
  	  if(tree.right){
        insertValue(tree.right, newValue);
  	  }else{
  	    tree.right = new BinarySearchTree(newValue);
  	  }
  	}
  };
  insertValue(this, valToInsert);
};

binTreeMethods.contains = function(valToFind){
  var result = false;

	var findValue = function(tree, value){
		if(value === tree.value){result = true;}
		if(value < tree.value){
			if(tree.left){
		    findValue(tree.left, value);
			}
		}else{
		  if(tree.right){
	      findValue(tree.right, value);
		  }
		}
	};
	findValue(this, valToFind);
  return result;
};

binTreeMethods.depthFirstLog = function(callback){
	var runFunc = function(tree, cb){
		cb(tree.value);
		if(tree.left){
	    runFunc(tree.left, cb);
		}
	  if(tree.right){
      runFunc(tree.right, cb);
	  }
	};
	runFunc(this, callback);
};