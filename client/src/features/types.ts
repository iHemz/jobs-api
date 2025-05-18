import type { AuthenticatedUser, UserAuth } from "@/types/auth";
import type { FeatureState } from "@/types/features";
import type { JobFormProps, JobProps, JobResponse } from "@/types/jobs";
import type { AsyncThunkPayloadCreator, PayloadAction } from "@reduxjs/toolkit";

export type UserParams = {
  url: string;
  user: UserAuth;
};

export type UserThunkPayloadCreator = AsyncThunkPayloadCreator<
  AuthenticatedUser,
  UserParams,
  { state: FeatureState }
>;

export type ClearStorePayloadCreator = AsyncThunkPayloadCreator<
  void,
  string,
  { state: FeatureState }
>;

export type UserStore = {
  isLoading: boolean;
  user: Omit<AuthenticatedUser, "token"> | null;
};

export type AllJobsFilterState = {
  search: string;
  searchStatus: string;
  jobType: string;
  sort: string;
  sortOptions: string[];
};

export interface AllJobsState extends AllJobsFilterState {
  jobs: JobProps[];
  isLoading: boolean;
  page: number;
  totalJobs: number;
  totalPages: number;
}

export type HandleChangeAction = PayloadAction<{
  key: keyof AllJobsFilterState;
  value: AllJobsFilterState[keyof AllJobsFilterState];
}>;

export type HandlePageChangeAction = PayloadAction<number>;

export type JobsThunkPayloadCreator = AsyncThunkPayloadCreator<
  JobResponse,
  void,
  { state: FeatureState }
>;

export type SingleJobState = {
  isLoading: boolean;
  id: string;
  job: JobFormProps;
  errors: Record<keyof JobFormProps, string | null>;
  hasErrors: boolean;
};

export type HandleJobChangeAction = PayloadAction<JobFieldChangeAction>;

export type SingleJobThunkPayloadCreator = AsyncThunkPayloadCreator<
  JobProps,
  void,
  { state: FeatureState }
>;

export type DeleteJobThunkPayloadCreator = AsyncThunkPayloadCreator<
  void,
  string,
  { state: FeatureState }
>;

export type HandleJobErrorsAction = PayloadAction<{
  key: keyof JobFormProps;
  value: string;
}>;

export type ValidateJobAction = PayloadAction<boolean>;
export type SetCurrentJobIdAction = PayloadAction<string>;
export type SetEditJobState = PayloadAction<{ id: string; job: JobFormProps }>;

export type JobFieldChangeAction = {
  key: keyof JobFormProps;
  value: JobFormProps[keyof JobFormProps];
};
