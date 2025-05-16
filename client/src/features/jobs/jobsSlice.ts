import { getJobsThunk } from "@/features/jobs/jobsThunk";
import type {
  HandleChangeAction,
  HandlePageChangeAction,
  JobFilterState,
  JobState,
} from "@/features/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialFiltersState: JobFilterState = {
  search: "",
  searchStatus: "all",
  jobType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialJobsState: JobState = {
  jobs: [],
  isLoading: false,
  page: 1,
  totalJobs: 0,
  totalPages: 1,
  ...initialFiltersState,
};

export const getJobs = createAsyncThunk("jobs/getJobs", async (_, thunkAPI) => {
  return getJobsThunk(_, thunkAPI);
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    showLoading: (state) => void (state.isLoading = true),
    hideLoading: (state) => void (state.isLoading = false),
    handleChange: (state, { payload: { key, value } }: HandleChangeAction) => {
      state.page = 1;
      switch (key) {
        case "sortOptions":
          state.sortOptions = value as string[];
          break;
        case "search":
        case "searchStatus":
        case "jobType":
        case "sort":
          state[key] = value as string;
          break;
        default:
          throw new Error(`Unhandled key: ${key}`);
      }
    },
    clearFilters: (state) => ({
      ...state,
      ...initialFiltersState,
    }),
    changePage: (state, { payload }: HandlePageChangeAction) =>
      void (state.page = payload),
    clearState: (_) => initialJobsState,
  },
  extraReducers: (builder) =>
    void builder
      .addCase(getJobs.fulfilled, (state, action) => {
        const { jobs, count, totalPages } = action.payload;
        state.isLoading = false;
        state.jobs = jobs;
        state.totalJobs = count;
        state.totalPages = totalPages;
      })
      .addCase(getJobs.pending, (state) => void (state.isLoading = true))
      .addCase(getJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          toast.error(payload as string);
          return;
        }
        toast.error("There was an error fetching jobs");
      }),
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearState,
} = jobsSlice.actions;

export default jobsSlice.reducer;
