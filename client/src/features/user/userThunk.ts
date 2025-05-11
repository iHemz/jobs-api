import type { ClearStoreParams, UserParams } from "@/features/user/types";
import { logoutUser } from "@/features/user/userSlice";
import type { AuthenticatedUser } from "@/types/auth";
import { post } from "@/utils/api";

export const registerUserThunk = async (params: UserParams) => {
  const { url, user, thunkAPI } = params;
  try {
    const response = (await post<AuthenticatedUser>(
      url,
      user
    )) as AuthenticatedUser;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const loginUserThunk = async (params: UserParams) => {
  const { url, user, thunkAPI } = params;
  const { firstname, lastname, ...otherUserDetails } = user;
  try {
    const response = (await post<AuthenticatedUser>(
      url,
      otherUserDetails
    )) as AuthenticatedUser;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const clearStoreThunk = async (params: ClearStoreParams) => {
  const { message, thunkAPI } = params;
  try {
    thunkAPI.dispatch(logoutUser(message));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
