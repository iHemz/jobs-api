import type {
  ClearStorePayloadCreator,
  UserThunkPayloadCreator,
} from "@/features/types";
import { logoutUser } from "@/features/user/userSlice";
import type { AuthenticatedUser } from "@/types/auth";
import { patch, post } from "@/utils/api";

export const registerUserThunk: UserThunkPayloadCreator = async (
  params,
  thunkAPI
) => {
  const { url, user } = params;
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

export const updateUserThunk: UserThunkPayloadCreator = async (
  params,
  thunkAPI
) => {
  const { url, user } = params;
  const { password, ...otherUserDetails } = user;
  try {
    const response = (await patch<AuthenticatedUser>(
      url,
      otherUserDetails
    )) as AuthenticatedUser;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const loginUserThunk: UserThunkPayloadCreator = async (
  params,
  thunkAPI
) => {
  const { url, user } = params;
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

export const clearStoreThunk: ClearStorePayloadCreator = async (
  message,
  thunkAPI
) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
