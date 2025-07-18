const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const sortType = {
  latest: "-createdAt",
  oldest: "createdAt",
  "a-z": "-position",
  "z-a": "position",
};

const getAllJobs = async (req, res) => {
  const { page = "1", limit = "10", search, sort, status, jobType } = req.query;
  const queryObject = { createdBy: req.user.userId };

  if (search && search.length > 0) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const result = Job.find(queryObject);

  if (sort && sortType[sort]) {
    result.sort(sortType[sort]);
  }

  const _page = Number(page) - 1;
  const _limit = Number(limit);
  const skip = _page * _limit;
  const jobs = await result.skip(skip);

  const count = await Job.estimatedDocumentCount(queryObject);
  const totalPages = Math.ceil(count / _limit);

  return res.status(StatusCodes.OK).json({ jobs, count, totalPages });
};

const getJob = async (req, res) => {
  const job = await Job.findOne({
    _id: req.params.id,
    createdBy: req.user.userId,
  });
  if (!job) {
    throw new NotFoundError("Job cannot be found.");
  }
  res.status(StatusCodes.OK).json(job);
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};

const updateJob = async (req, res) => {
  const {
    body: { company, position },
    params: { id: jobId },
    user: { userId },
  } = req;

  if ([company, position].some((i) => i === "")) {
    throw new BadRequestError("Company or position cannot be empty.");
  }

  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
      createdBy: userId,
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
    user: { userId },
  } = req;
  const deletedJob = await Job.findOneAndDelete({
    createdBy: userId,
    _id: jobId,
  });
  if (!deletedJob) {
    throw new NotFoundError("Job cannot be found.");
  }
  res.status(StatusCodes.OK).send();
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
