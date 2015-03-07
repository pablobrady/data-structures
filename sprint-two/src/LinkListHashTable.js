var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var list = this._storage.get(hash) || LinkedList();
	list.addToTail([key,value]);
	this._storage.set(hash, list);
};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);

  var tempNode = this._storage.get(hash).head;
  while(tempNode){
  	if(tempNode.value[0] === key){
  		return tempNode.value[1];
  	}
  	tempNode = tempNode.next;
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);

  var list = this._storage.get(hash);
  var currNode = list.head;
  var prevNode = null;

  while(currNode){
  	if(currNode.value[0] === key){
      if(currNode === list.head){
      	list.head = currNode.next;
      	this._storage.set(hash, list);
      }else{
      	prevNode.next = currNode.next;
      }
      break;
  	}else{
  		prevNode = currNode;
  	  currNode = currNode.next;
  	}
  }
};



