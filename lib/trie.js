import Node from './node'
export default class Trie {
  constructor() {
    this.root = new Node(null);
    this.count = 0; 
  }

   insert(word) {
    let node = this.root;
    let letters = [...word];
    this.insertRecursive(letters, node, word);
    this.count++;
  };

  insertRecursive(letters, node, word) {
    if (letters.length < 1) {
      node.end = true;
      node.word = word;
      return;
    }

    if (node.child[letters[0]] === true) {
      node = node.child[letters.shift()];
    } else {
      node.child[letters[0]] = new Node();
      node = node.child[letters.shift()];
    }

    return this.insertRecursive(letters, node, word)
  };


  suggest(input) {
    let completeMe = [...input];
    let node = this.root;
    var checkpoint;
    let finalArray = [];


    while (completeMe.length) {
     if (node.child[completeMe[0]] === true) {
      node = node.child[completeMe.shift()];
    } else {
      return 'That does not exist';
    }
  }
    
  this.suggestRecursive(node, finalArray);

  console.log(finalArray)
}
 
 suggestRecursive(node, finalArray) {

   if(Object.keys(node.children).length > 1) {
    let keyArr = Object.keys(node.children);
    let checkpoint = node;
    keysArr.forEach (key => {
      node = checkpoint;
      node = node.children[key];
      this.suggestRecursive(node, finalArray);
    })
  } else {
    if (!node.end) {
      let key = Object.keys(node.children)
      node = node.children[key];
      this.suggestRecursive(node, finalArray)
   } else {
    finalArray.push(node.letters);
    node.end = !node.end
    let key = Object.keys(node.children);
    if(key.length >= 1) this.suggestRecursive(node, finalArray)
   }

  }

 }

}




  // insert(value, node = this.root) {
    // insert word 'word'
    // set first letter of word to be a key 
    // of the current node with value of new Node()
    // the second/next/currentValue letter of the word will become the key for the next new Node()
    // when the iteration reaches the last letter where it is the key
    // the value of the last letter/key is a new empty node
    // 'nothing' is passed in
    // test fails
    // end is added as a key
    // end = true
    // increment counter
    // leave function

    //insert next word 'woke'
    // check to see if first letter exists as a key
    // if first letter exists don't create a new key
   // set value to an array
    // ['word'] to be ['w', 'o', 'r', 'd']
    // reduce letters array to nodes(objects)

// insert
// take a word
// change to lowerCase
// split into letters
// search for existing letter node
// if node exists shift off first letter
// if node does not exist create node and then shift off first letter
// back to search for existing node starting with currentValue until length is 0 
// while loop?

