import { Router } from 'express';
import validate from 'express-validation';

import * as UserController from '../controllers/UserController';
import * as PriceRulesController from '../controllers/PriceRulesController';
import routeValidations from '../validations';

import { authLocal, authJwt } from '../services/auth';

const routes = new Router();

routes.post(
  '/signup',
  validate(routeValidations.signup),
  UserController.signUp,
);
routes.post('/login', authLocal, UserController.login);
routes.post(
  '/priceRules',
  authJwt,
  validate(routeValidations.createrule),
  PriceRulesController.createPriceRule,
);
routes.patch(
  '/userRule/:userId/:ruleId',
  authJwt,
  UserController.updateUserRule,
);
routes.get('/getuser/:userId', authJwt, UserController.fetchUserById);

export default app => {
  app.use('/api/v1', routes);
};
