import HTTPStatus from "http-status";
import PriceRule from "../models/PriceRule";

module.exports = {
  createPriceRule: async (req, res) => {
    try {
      const rule = await PriceRule.create(req.body);
      return res.status(HTTPStatus.OK).json(rule);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },
  updateJobAdType: async (req, res) => {
    try {
      const { ruleId, JobAdId } = req.params;
      const priceRule = await PriceRule.findById(ruleId);
      PriceRule.jobads.push(JobAdId);
      await PriceRule.save();
      return res.status(HTTPStatus.OK).json(PriceRule);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
};
