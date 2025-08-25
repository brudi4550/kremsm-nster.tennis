const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // enables `next export`
  basePath: isProd ? '/kremsmuenster-tennis' : '',
  assetPrefix: isProd ? '/kremsmuenster-tennis/' : '',
};
