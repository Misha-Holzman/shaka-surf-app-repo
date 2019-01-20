/* eslint-env jest */
import mockAxios from 'jest-mock-axios';

import TokenService from '../TokenService';
import AjaxAdapter from '../AjaxAdapter';


describe('AjaxAdapter', () => {
  let TweetService;

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  beforeEach(() => {
    TokenService.token = 'my-dummy-token';
    TweetService = AjaxAdapter('/api/tweets', 'tweets', {
      'Content-Type': 'application/json',
      get Authorization() {
        return `Bearer ${TokenService.token}`;
      },
    });
  });

  it('should call the constructor', () => {
    expect(mockAxios.create.mock.calls[0]).toMatchSnapshot();
  })

  xit('should destroy a getter after destructure', () => {
    let total = 0;
    const { test } = {
      get test() {
        return total;
      },
    };
    total = 4;
    expect(test).toBe(0);
  });

  xit('should preserve a getter after restructure', () => {
    let total = 0;
    const getterObj = {
      get test() {
        return total;
      },
    };

    const newGetterObj = {
      getterObj,
    };

    total = 4;
    expect(newGetterObj.getterObj.test).toBe(4);
  });

  it('should create an AjaxAdapter', () => {
    expect(TweetService).toMatchSnapshot();
  });

  it('should contain a getter in the Authorization header', () => {
    const myToken = 'new-token';
    TokenService.token = myToken;

    // const spy = jest.spyOn(TweetService.config.headers, 'Authorization', 'get')
    expect(TweetService.config.headers.Authorization).toMatch(myToken);
  });

  it('should remove the token in header when no token is present', () => {
    TokenService.destroy();
    expect(TweetService.config.headers).toMatchSnapshot();
  });
});
