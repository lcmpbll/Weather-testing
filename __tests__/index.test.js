import exampleTestFunction from '../src/index.js';

describe('deckMessage', () => {
  test('print message to console', () => {
    expect(deckMessage()).toEqual('hi there, from the deck');
  });
});
