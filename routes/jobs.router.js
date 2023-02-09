const express = require("express");
const jobsRouter = express.Router();

const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  showStats,
} = require("../controllers/jobs.controller");


jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/stats').get(showStats)
jobsRouter.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = jobsRouter