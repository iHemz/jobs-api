const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const { page = "1", limit = "10" } = req.query;
  const result = Job.find({ createdBy: req.user.userID }).sort("createdAt");
  const _page = Number(page) - 1;
  const _limit = Number(limit);
  const skip = _page * _limit;
  const jobs = await result.skip(skip);
  return res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const job = await Job.findOne({
    _id: req.params.id,
    createdBy: req.user.userID,
  });
  if (!job) {
    throw new NotFoundError("Job cannot be found.");
  }
  res.status(StatusCodes.OK).json(job);
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};

const updateJob = async (req, res) => {
  const {
    body: { company, position },
    params: { id: jobId },
    user: { userID },
  } = req;

  if ([company, position].some((i) => i === "")) {
    throw new BadRequestError("Company or position cannot be empty.");
  }

  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
      createdBy: userID,
    },
    req.body,
    { runValidators: true, new: true }
  );
  if (!job) {
    throw new NotFoundError("Job cannot be found.");
  }
  res.status(StatusCodes.CREATED).json(job);
};

const deleteJob = async (req, res) => {
  const {
    params: { id: jobId },
    user: { userID },
  } = req;
  const deletedJob = await Job.findOneAndDelete({
    createdBy: userID,
    _id: jobId,
  });
  if (!deletedJob) {
    throw new NotFoundError("Job cannot be found.");
  }
  res.status(StatusCodes.OK).send();
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
