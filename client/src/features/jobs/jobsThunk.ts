import type { JobsThunkPayloadCreator } from "@/features/types";
import type { JobResponse } from "@/types/jobs";
import { get } from "@/utils/api";

export const getJobsThunk: JobsThunkPayloadCreator = async (_, thunkAPI) => {
  try {
    const { search, searchStatus, jobType, sort, page } =
      thunkAPI.getState().jobs;

    let url = `/jobs?&status=${searchStatus}&jobType=${jobType}&sort=${sort}&page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    const response = (await get<JobResponse>(url)) as JobResponse;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
