class _Node {
  constructor(value, next) {
      this.value=value,
      this.next=next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insertFirst(item){
      this.head = new _Node(item, this.head);
  }

  insertLast(item){
      if(this.head === null){
          this.insertFirst(item);
      }
      else{
          let tempNode = this.head;
          while(tempNode.next !== null){
              tempNode = tempNode.next;
          }
          tempNode.next = new _Node(item, null);
      }
  }
  /**Inserts a new node after a node containing the key.*/
  insertAfter(key, itemToInsert){
      let tempNode = this.head;
      while(tempNode !== null && tempNode.value !== key){
          tempNode = tempNode.next;
      } 
      if(tempNode !== null){
          tempNode.next = new _Node(itemToInsert, tempNode.next);
      }  
  }
  /* Inserts a new node before a node containing the key.*/
  insertBefore(key, itemToInsert){
      if(this.head == null){
          return;
      }
      if(this.head.value == key){
          this.insertFirst(itemToInsert);
          return;
      }
      let prevNode = null;
      let currNode = this.head;
      while(currNode !== null && currNode.value !== key){
          prevNode = currNode;
          currNode = currNode.next;
      }
      if(currNode === null){
          console.log('Node not found to insert');
          return;
      }
      //insert between current and previous
      prevNode.next = new _Node(itemToInsert, currNode);
  }
  insertAt(nthPosition, itemToInsert) {
      if (nthPosition < 0) {
          throw new Error('Position error');
      }
      if (nthPosition === 0) {
          this.insertFirst(itemToInsert);
      }else {
          // Find the node which we want to insert after
          const node = this._findNthElement(nthPosition - 1);
          const newNode = new _Node(itemToInsert, null);
          newNode.next = node.next; 
          node.next = newNode;
      }
  }
  _findNthElement(position) {
      let node = this.head;
      for (let i=0; i<position; i++) {
          node = node.next;
      }
      return node;
  }
  remove(key){ 
      //if the list is empty
      if (!this.head){
          return null;
      }
      //if the node to be removed is head, make the next node head
      if(this.head.value.key === key){
          this.head = this.head.next;
          return;
      }
      //start at the head
      let currNode = this.head;
      //keep track of previous
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value.key !== key)) {
          //save the previous node 
          previousNode = currNode;
          currNode = currNode.next;
      }
      if(currNode === null){
          console.log('Item not found');
          return;
      }
      previousNode.next = currNode.next;
  }
  find(key) { //get
      //start at the head
      let currNode = this.head;
      //if the list is empty
      if (!this.head){
          return null;
      }
      while(currNode.value.key !== key) {
          //return null if end of the list 
          // and the item is not on the list
          if (currNode.next === null) {
              return null;
          }
          else {
              //keep looking 
              currNode = currNode.next;
          }
      }
      //found it
      return currNode.value;
  }
}

function displayList(list){
  let currNode = list.head;
  while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
  }
}

function size(lst){
  let counter = 0;
  let currNode = lst.head;
  if(!currNode){
      return counter;
  }
  else
      counter++;
  while (!(currNode.next == null)) {
      counter++;
      currNode = currNode.next;
  }
  return counter;
}

function isEmpty(lst){
  let currNode = lst.head;
  if(!currNode){
      return true;
  }
  else {
      return false;
  }
}

function findPrevious(lst, item) {
  let currNode = lst.head;
  while ((currNode !== null) && (currNode.next.value !== item)) {
      currNode = currNode.next;
  }
  return currNode;
}

function findLast(lst){
  if(lst.head === null){
      return 'list is empty';
  } 
  let tempNode = lst.head;
  while(tempNode.next !== null){
      tempNode = tempNode.next;
  }
    return tempNode;
}

module.exports = LinkedList;