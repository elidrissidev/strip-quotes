require('mocha');
const assert = require('assert');

const stripQuotes = require('./');

describe('stripQuotes', () => {
  it('should remove quotes surrounding the string', () => {
    const input = '"Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling."';
    const expectedOutput = 'Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling.';

    assert.strictEqual(stripQuotes(input), expectedOutput);
  });

  it('should keep quotes in the middle of the string', () => {
    const input = '"Tailwind is like a really nice pair of socks. You think, "okay, how good can a pair of socks be". Then you put socks on and you are like "%@#! these are socks"."';
    const expectedOutput = 'Tailwind is like a really nice pair of socks. You think, "okay, how good can a pair of socks be". Then you put socks on and you are like "%@#! these are socks".';

    assert.strictEqual(stripQuotes(input), expectedOutput);
  });

  it('should throw an error if an incorrect argument was provided', () => {
    assert.throws(() => stripQuotes(), 'Type Error: Expected a string');
    assert.throws(() => stripQuotes(10), 'Type Error: Expected a string');
  });
});
