import { expect } from 'chai';
import Trie from '../lib/trie'
import Node from '../lib/node'

describe('trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should start with zero elements', () => {
    expect(trie.count).to.equal(0);
  });

  it('should set its default root to an empty object', () => {
    expect(trie.root.child).to.deep.eq({});
  });

  it('should increase count each time we enter a new word', () => {
    expect(trie.count).to.eq(0);
    trie.insert('astounding');
    expect(trie.count).to.eq(1);
    trie.insert('fantastic');
    expect(trie.count).to.eq(2);
    trie.insert('incredible');
    expect(trie.count).to.eq(3);
  });

  it ('should be able to insert multiple words', () => {
    trie.insert ('astounding');
    trie.insert ('fantastic');
    trie.insert ('incredible');
    trie.suggest('a')
    trie.suggest('s')
    expect(trie.suggest()). to equal()
    expect(Object.keys(trie.root.child)).to.deep.eq([ 'a', 'f', 'i' ]);
    console.log(JSON.stringify(trie, null, 4));
    // console.log(expect(Object.keys(trie.root.child)))
  });


});

