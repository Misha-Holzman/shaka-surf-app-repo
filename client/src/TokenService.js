/* eslint-env browser */
const tokenService = {
  set token(token) {
    // store token in localStorage under the 'authToken' key
    localStorage.setItem('authToken', token);
  },
  get token() {
    // fetch the token out of localStorage
    return localStorage.getItem('authToken');
  },

  destroy() {
    // delete the token
    localStorage.removeItem('authToken');
  },

};
module.exports = tokenService;
