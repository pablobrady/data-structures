var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value); // create a new node from passed in value
    if(list.head === null){    // if the list is empty
      list.head = newNode;     // add the node to the head
    }else{                     // if the list isn't empty
      list.tail.next = newNode;// set the previous node's next to our new node
    }
    list.tail = newNode; // Always set the tail to our new node.
  };

  list.removeHead = function(){
    var value = list.head.value; // save head value
    list.head = list.head.next;  // set head to the next node
    return value; // return previous head value
  };

  list.contains = function(valToFind){
    var tempNode = list.head; // set a temporary node as a cursor
    while(tempNode){ // if the cursor is pointing at an object
      if(tempNode.value === valToFind){ //and the node value is the value we're looking for
        return true; // return breaks the loop
      }
      tempNode = tempNode.next; // else try the next node.
    }
    return false; //if the cursor reaches the end, tempNode will be null, the loop will break, and we'll return false
  };

  return list; // return our LinkedList constructor
};

//Node is a node constructor.
//It creates a "node" object, that consists of a value, and a pointer to the next node.
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
