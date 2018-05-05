import HTTPStatus from 'http-status';
import PriceRule from '../models/PriceRule';

module.exports = {
  createPriceRule: async (req, res) => {
    try {
      const rule = await PriceRule.create(req.body);
      return res.status(HTTPStatus.OK).json(rule);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },
};
