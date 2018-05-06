import HTTPStatus from "http-status";
import JobAd from "../models/JobAd";

module.exports = {
  createJobAd: async (req, res) => {
    try {
      const jobAd = await JobAd.create(req.body);
      return res.status(HTTPStatus.OK).json(jobAd);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },
  fetchJobAds: async (req, res) => {
    try {
      const job = await JobAd.find();
      return res.status(HTTPStatus.OK).json(job);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
};
