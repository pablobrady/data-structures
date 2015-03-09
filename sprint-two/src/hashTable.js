var HashTable = function(){
  this._limit = 8; // The size of the storage array.
  this._storage = LimitedArray(this._limit); // Initialize the storage.
  this._count = 0;
};

// INSERT
// input: key, value
// goal: add a key/value pair to storage
HashTable.prototype.insert = function(key, value){  
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if(bucket === undefined){bucket = []};
  this._storage.set(index, bucket);
  bucket.push([key,value]);
  this._count++;
  
  if( this._count > .75 * this._limit){
    this.resize( this._limit * 2);
  }
  
};

// RETRIEVE
// input: key
// goal: return the value from storage that is associated with the key
HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if(bucket === undefined){return null};
  // get the value associated with the key (within the bucket)
  for(var i=0; i<bucket.length; i++){
    if(bucket[i][0] === key){ 
      return bucket[i][1]; //return value
    };
  }
  return null;
};

// REMOVE
// input: key
// goal: remove the key/value pair associated with the input
HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if(bucket === undefined){return null};
  // find the array slot associated with the key/value pair
  for(var i=0; i < bucket.length; i++){
    if(bucket[i][0] === key){ 
      bucket.splice(i, 1); //delete key/value pair
    };
  }
  this._count--;
  if( this._count < this._limit / 4){
    this.resize(this._limit / 2);
  }
  
};

// CHECK STORAGE
// input: limit, storage
// goal: change the size of the storage, and reorganize whenever
//   it is more than 75% full or 25% full 

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  var context = this;
  this._count = 0;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  
  oldStorage.each(function(bucket){
    if(bucket){
      for(var i = 0; i<bucket.length; i++){
        context.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
}

