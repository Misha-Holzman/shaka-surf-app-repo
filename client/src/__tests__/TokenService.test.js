
describe('TokenService', () => {
  let TokenService;

  beforeEach(() => {
    TokenService = require('../TokenService');
    localStorage.clear();
  });

  it('should instantiate', () => {
    expect(TokenService).toMatchSnapshot();
  });

  it('should persist a token', () => {
    const myToken = 'my-special-token';

    TokenService.token = myToken;

    expect(TokenService.token).toMatch(myToken);
  });

  it('should NOT persist a previous token', () => {
    expect(TokenService.token).toBeNull();
  });

  it('should destroy a token', () => {
    const myToken = 'my-special-token';

    TokenService.token = myToken;
    TokenService.destroy();

    expect(TokenService.token).toBeNull();
  });

  it('should resolve a string dynamically', () => {
    const myToken = 'my-special-token';

    TokenService.token = myToken;

    const headers = {
      get Authorization() {
        return `Bearer ${TokenService.token}`;
      },
    };

    TokenService.token = 'abc-1234';

    expect(headers.Authorization).toBe('Bearer abc-1234');
  });
});
