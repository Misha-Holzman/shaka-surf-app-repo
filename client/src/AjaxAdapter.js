const axios = require('axios');

module.exports = (baseURL, noun, headers) => {
  const config = {
    baseURL,
    headers,
    timeout: 1000,
  };

  const instance = axios.create(config);

  return {
    config,
    create(data) {
      return instance.post('/', { [noun]: data })
        .catch((e) => { throw e; });
    },

    async read() {
      try {
        const { data } = await instance.get('/');
        return data[`${noun}s`];
      } catch (e) {
        throw e;
      }
    },

    update(id, data) {
      return instance.put(`/${id}`, { [noun]: data })
        .catch((e) => { throw e; });
    },

    destroy(id) {
      return instance.delete(`/${id}`)
        .catch((e) => { throw e; });
    },
  };
};
