import {
  addJobThunk,
  deleteJobThunk,
  updateJobThunk,
} from "@/features/job/JobThunk";
import type {
  HandleJobChangeAction,
  SetCurrentJobIdAction,
  SetEditJobState,
  SingleJobState,
  ValidateJobAction,
} from "@/features/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: SingleJobState = {
  isLoading: false,
  id: "",
  job: {
    company: "",
    position: "",
    status: "pending",
    jobType: "full-time",
    jobLocation: "",
  },
  errors: {
    company: null,
    position: null,
    status: null,
    jobType: null,
    jobLocation: null,
  },
  hasErrors: false,
};

export const addJob = createAsyncThunk("job/addJob", async (_, thunkAPI) =>
  addJobThunk(_, thunkAPI)
);

export const updateJob = createAsyncThunk(
  "job/updateJob",
  async (_, thunkAPI) => updateJobThunk(_, thunkAPI)
);

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (id: string, thunkAPI) => deleteJobThunk(id, thunkAPI)
);

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleJobChange: (
      state,
      { payload: { key, value } }: HandleJobChangeAction
    ) => {
      const newJob = { ...state.job, [key]: value };
      const newErrors = { ...state.errors, [key]: null };
      return { ...state, job: newJob, errors: newErrors };
    },
    setCurrentJobId: (state, { payload }: SetCurrentJobIdAction) => {
      state.id = payload;
    },
    setJobState: (state, { payload }: SetEditJobState) => {
      state.job = payload.job;
      state.id = payload.id;
    },
    clearJob: (_) => initialState,
    validateJob: (state, { payload }: ValidateJobAction) => {
      const hasEmptyJobField = Object.values(state.job).some((value) => !value);
      if (!hasEmptyJobField) {
        state.hasErrors = false;
        return;
      }
      state.hasErrors = true;
      if (payload) {
        if (!state.job.status) {
          state.errors.status = "Status is required";
        }
      }
      if (!state.job.company) {
        state.errors.company = "Company is required";
      }
      if (!state.job.position) {
        state.errors.position = "Position is required";
      }
      if (!state.job.jobType) {
        state.errors.jobType = "Job Type is required";
      }
      if (!state.job.jobLocation) {
        state.errors.jobLocation = "Job Location is required";
      }
    },
  },
  extraReducers: (builder) =>
    void builder
      .addCase(addJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job added successfully");
      })
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (state.hasErrors) return;
        if (payload) {
          toast.error(payload as string);
          return;
        }
        toast.error("There was an error adding the job");
      })
      .addCase(updateJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job updated successfully");
      })
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (state.hasErrors) return;
        if (payload) {
          toast.error(payload as string);
          return;
        }
        toast.error("There was an error updating the job");
      })
      .addCase(deleteJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job deleted successfully");
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          toast.error(payload as string);
          return;
        }
        toast.error("There was an error deleting the job");
      }),
});

export const {
  handleJobChange,
  clearJob,
  validateJob,
  setCurrentJobId,
  setJobState,
} = jobSlice.actions;
export default jobSlice.reducer;
