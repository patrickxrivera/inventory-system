const setHeaders = (token) => ({
  Authorization: `Bearer ${token}`
});

const isTestEnv = () => process.env.NODE_ENV === 'test';

const isProdEnv = () => process.env.NODE_ENV === 'production';

module.exports = {
  setHeaders,
  isTestEnv,
  isProdEnv
};
