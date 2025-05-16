import type { AuthenticatedUser, UserAuth } from "@/types/auth";
import type { FeatureState } from "@/types/features";
import type { JobProps, JobResponse } from "@/types/jobs";
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

export type JobFilterState = {
  search: string;
  searchStatus: string;
  jobType: string;
  sort: string;
  sortOptions: string[];
};

export interface JobState extends JobFilterState {
  jobs: JobProps[];
  isLoading: boolean;
  page: number;
  totalJobs: number;
  totalPages: number;
}

export type HandleChangeAction = PayloadAction<{
  key: keyof JobFilterState;
  value: JobFilterState[keyof JobFilterState];
}>;

export type HandlePageChangeAction = PayloadAction<number>;

export type JobsThunkPayloadCreator = AsyncThunkPayloadCreator<
  JobResponse,
  void,
  { state: FeatureState }
>;
