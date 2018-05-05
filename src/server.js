import express from 'express';

import constants from './config/constants';
import './config/database';

import middleware from './config/middleware';

import routes from './routes';

const app = express();

middleware(app);
routes(app);

app.listen(constants.PORT, '0.0.0.0', () => {
  console.log(`server is listening on PORT: ${constants.PORT}`);
});
