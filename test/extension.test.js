const { Provider } = require('../src/extension');

describe('Extension', () => {
  it('Provider should have provideHover method', () => {
    expect(Provider.prototype.provideHover).toBeDefined();
  });
});
