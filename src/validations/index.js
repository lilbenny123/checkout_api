import Joi from 'joi';

import { passwordReg } from '../common/helpers';

export default {
  signup: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      username: Joi.string().required(),
      password: Joi.string()
        .regex(passwordReg)
        .required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    },
  },
  createrule: {
    body: {
      name: Joi.string().required(),
      ruleType: Joi.string().required(),
      min_ads: Joi.string().required(),
    },
  },
};
