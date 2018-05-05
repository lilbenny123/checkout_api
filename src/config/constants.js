const dev = {
  MONGO_URL: 'mongodb://localhost/checkoutdb-dev',
  JWT_SECRET: 'bCthG6hBZmU78gJt9s7SD2WLJCdgkJxXSXrgFa5CbHHw8YQP64Zq4wbrHBwY',
};
const test = {
  MONGO_URL: 'mongodb://localhost/checkoutdb-test',
  JWT_SECRET: 'bCthG6hBZmU78gJt9s7SD2WLJCdgkJxXSXrgFa5CbHHw8YQP64Zq4wbrHBwY',
};
const prod = {
  MONGO_URL: 'mongodb://localhost/checkoutdb',
  JWT_SECRET: 'bCthG6hBZmU78gJt9s7SD2WLJCdgkJxXSXrgFa5CbHHw8YQP64Zq4wbrHBwY',
};

const defaultConf = {
  PORT: process.env.PORT || 4000,
};

const buildConfig = env => {
  switch (env) {
    case 'development':
      return dev;
      break;
    case 'test':
      return test;
      break;
    default:
      return prod;
  }
};

export default {
  ...defaultConf,
  ...buildConfig(process.env.NODE_ENV),
};
