const createJob = async (req, res) => {
  res.send("Create a job");
};

const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};

const updateJob = async (req, res) => {
  res.send("Update a job");
};

const deleteJob = async (req, res) => {
  res.send("Delete a job");
};

const showStats = async (req, res) => {
  res.send("JOBS STATS");
};

module.exports = { createJob, getAllJobs, updateJob, deleteJob, showStats };
