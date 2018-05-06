import HTTPStatus from "http-status";
import User from "../models/User";
import PriceRule from "../models/PriceRule";

module.exports = {
  signUp: async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(HTTPStatus.CREATED).json(user.toJSON());
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },
  login: (req, res, next) => {
    res.status(HTTPStatus.OK).json(req.user.toAuthJSON());

    return next();
  },
  fetchUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId).populate("pricerules");
      return res.status(HTTPStatus.OK).json(user);
    } catch (e) {
      console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },
  updateUserRule: async (req, res) => {
    try {
      const { userId, ruleId } = req.params;
      const user = await User.findById(userId);
      user.pricerules.push(ruleId);
      await user.save();
      return res.status(HTTPStatus.OK).json(user);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
};
