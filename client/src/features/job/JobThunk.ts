import { clearJob, setCurrentJobId } from "@/features/job/JobSlice";
import { getJobs } from "@/features/jobs/jobsSlice";
import type {
  DeleteJobThunkPayloadCreator,
  SingleJobThunkPayloadCreator,
} from "@/features/types";
import type { JobProps } from "@/types/jobs";
import { del, patch, post } from "@/utils/api";

export const addJobThunk: SingleJobThunkPayloadCreator = async (
  _,
  thunkAPI
) => {
  const { job, hasErrors } = thunkAPI.getState().job;
  if (hasErrors) {
    return Promise.reject();
  }
  try {
    const response = (await post<JobProps>("/jobs", job)) as JobProps;
    thunkAPI.dispatch(clearJob());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateJobThunk: SingleJobThunkPayloadCreator = async (
  _,
  thunkAPI
) => {
  const { id, job, hasErrors } = thunkAPI.getState().job;
  if (hasErrors) {
    return Promise.reject();
  }
  try {
    const response = (await patch<JobProps>(`/jobs/${id}`, job)) as JobProps;
    thunkAPI.dispatch(clearJob());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const deleteJobThunk: DeleteJobThunkPayloadCreator = async (
  id,
  thunkAPI
) => {
  try {
    thunkAPI.dispatch(setCurrentJobId(id));
    await del(`/jobs/${id}`);
    thunkAPI.dispatch(clearJob());
    thunkAPI.dispatch(getJobs());
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
