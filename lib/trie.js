import Node from './node';
export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0; 
  }

  count() {
    return this.count;
  }

  insert(word) {
    let node = this.root;
    let letters = [...word];
    this.inserting(letters, node, word);
    this.count++;
    console.log(JSON.stringify(this, null, 4));
  }

  inserting(letters, node, word) {
    if (!letters.length) {
      node.end = true;
      node.word = word;
      return;
    }

    if (node.child[letters[0]]) {
      node = node.child[letters.shift()];
    } else {
      node.child[letters[0]] = new Node();
      node = node.child[letters.shift()];
    }

    return this.inserting(letters, node, word);
  }

  suggest(input) {
    let completeMe = [...input];
    let node = this.root;
    let finalArray = [];

    while (completeMe.length) {
      if (node.child[completeMe[0]]) {
        node = node.child[completeMe.shift()];
      } else {
       return 'That does not exist';
      }
    }
    this.suggesting(node, finalArray);
    console.log(finalArray);
  }
 
  // suggesting(node, finalArray) {
    if(Object.keys(node.child).length > 1) {
      let keyArr = Object.keys(node.child);
      let checkpoint = node;
      keyArr.forEach (key => {
        node = checkpoint;
        node = node.child[key];
        this.suggesting(node, finalArray);
      })
    } else {
      if (!node.end) {
        let key = Object.keys(node.child)
        node = node.child[key];
        this.suggesting(node, finalArray)
      } else {
        finalArray.push(node.letter);
        node.end = !node.end
        let key = Object.keys(node.child);
        if (key.length >= 1) { 
          this.suggesting(node, finalArray);
          node.end = !node.end;
        } 
      }
    }
 }

 populate (dictionary) {
  dictionary.forEach (word => {
    this.insert(word);
  });
 }
}

