import Node from './node'
export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0; 
  };


   insert(value) {
    let node = this.root;
    let letters = [...value];

    this.insertRecursive(letters, node, value);
    this.count++;
  }

  insertRecursive(letters, node, value) {
    if (letters.length < 1) {
      node.end = true;
      node.value = value;
      return;
    }

    if (node.child[letters[0]] === true) {
      node = node.child[letters.shift()];
    } else {
      node.child[letters[0]] = new Node();
      node = node.child[letters.shift()];
    }

    return this.insertRecursive(letters, node, value)
  }

  suggest(input) {
    let completeMe = [...input];
    let currNode = this.root;


    while (completeMe.length) {
    if (node.child[letters[0]] === true) {
      node = node.child[letters.shift()];
    } else {
      return 'That does not exist';
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

