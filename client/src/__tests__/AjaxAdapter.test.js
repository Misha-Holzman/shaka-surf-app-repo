/* eslint-env jest */
import TokenService from '../TokenService';
import AjaxAdapter from '../AjaxAdapter';

describe('AjaxAdapter', () => {
  let TweetService;

  beforeEach(() => {
    TweetService = AjaxAdapter('/api/tweets', 'tweets', {
      "Content-Type": "application/json",
      get Authorization(){
        return `Bearer ${TokenService.token}`;
      },
    });
  });

  it('should preserve a getter after destructure', () => {
    let total = 0;
    const getterObj = {
      get test() {
        return total;
      }
    }
    total = 4;
    expect(getterObj.test).toBe(4);
  })

  it('should preserve a getter after restructure', () => {
    let total = 0;
    const getterObj = {
      get test() {
        return total;
      }
    }

    const newGetterObj = {
      getterObj,
    }
    total = 4
    expect(newGetterObj.getterObj.test).toBe(4)
  })

  it('should create an AjaxAdapter', () => {
    expect(TweetService).toMatchSnapshot();
  });

  it('should contain a getter in the Authorization header', () => {
    const myToken = 'foo:bar';
    TokenService.token = myToken;

    debugger;
    //const spy = jest.spyOn(TweetService.config.headers, 'Authorization', 'get')
    expect(TweetService.config.headers.Authorization).toMatch(myToken);
  });
});
