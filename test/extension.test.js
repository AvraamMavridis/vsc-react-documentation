const { Provider } = require('../src/extension');

describe('Extension', () => {
  it('dumb', () => {
    expect(Provider.prototype.provideHover).toBeDefined();
  });
});