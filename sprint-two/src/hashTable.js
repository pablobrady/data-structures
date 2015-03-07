var HashTable = function(){
  this._limit = 8; // The size of the storage array.
  this._storage = LimitedArray(this._limit); // Initialize the storage.
};

// Insert new key/value into storage (handling the hash key for us)
HashTable.prototype.insert = function(key, value){  
  var hash = getIndexBelowMaxForKey(key, this._limit); // Get hash for this key.
  var bucket = this._storage.get(hash); // Get the sub-array (bucket) for this hash key.
  if(bucket){
    bucket.push([key,value]); // Add our sub-array to this bucket.
  }else{
    bucket = [[key,value]];   // Add the first sub-array to a bucket.
  }
	this._storage.set(hash, bucket); // Save the bucket.
};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hash);
  for (var i = 0; i < bucket.length; i++) { // Search thru the bucket for the exact key.
    if(bucket[i][0] == key){ // Item 0 is the key
      return bucket[i][1];   // Item 1 is the value.
    }
  };
  return null; // Not found.
}

HashTable.prototype.remove = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hash);
  for (var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] == key){
      bucket.splice(i, 1);  // Remove the element from the bucket array.
    }
  };
  this._storage.set(hash, bucket);  // Resave the array to this bucket.    
}
