const express = require("express");
const jobsRouter = express.Router();

const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} = require("../controllers/jobs.controller");


jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/stats').get(showStats)
jobsRouter.route('/:id').delete(deleteJob).patch(updateJob)

module.exports = jobsRouter