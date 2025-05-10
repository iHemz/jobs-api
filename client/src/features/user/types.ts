import type { AuthenticatedUser, UserAuth } from "@/types/auth";
import type { GetThunkAPI } from "@reduxjs/toolkit";

export type UserParams = {
  url: string;
  user: UserAuth;
  thunkAPI: GetThunkAPI<any>;
};

export type ClearStoreParams = {
  message: string;
  thunkAPI: GetThunkAPI<any>;
};

export type UserStore = {
  isLoading: boolean;
  user: Omit<AuthenticatedUser, "token"> | null;
};
