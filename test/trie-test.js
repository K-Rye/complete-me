import { expect } from 'chai';
import Trie from '../lib/trie'
import Node from '../lib/node'
import fs from 'fs'

const text = '/usr/share/dict/words';
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

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
    trie.insert('parachute');
    expect(trie.count).to.eq(1);
    trie.insert('panda');
    expect(trie.count).to.eq(2);
    trie.insert('paratrooper');
    expect(trie.count).to.eq(3);
  });

  it ('should be able to insert multiple words', () => {
    trie.insert ('incomplete');
    trie.insert ('increase');
    trie.insert ('insane');
    trie.insert ('insatiable');
    trie.insert ('insurgent');
    expect(Object.keys(trie.root.child)).to.deep.eq([ 'i' ]);
    // console.log(JSON.stringify(trie, null, 4));
  })

  it ('should return an array of options', () => {
    trie.insert ('incomplete');
    trie.insert ('increase');
    trie.insert ('insane');
    trie.insert ('insatiable');
    trie.insert ('insurgent');

    trie.suggest ('in')
    // console.log(JSON.stringify(trie, null, 4));
    // expect (trie.suggest ('in')).to.deep.equal([ 'incomplete', 'increase', 'insane', 'insatiable', 'insurgent' ])
  })

  it ('should populate input when passing in the dictionary', () => {
    expect (trie.count()).to.equal(0);
    trie.populate(dictionary);
    expect(trie.count()).to.equal(235886)
  })
});

