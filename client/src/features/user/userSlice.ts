import type { UserStore } from "@/features/types";
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "@/features/user/userThunk";
import type { UserAuth } from "@/types/auth";
import { fetchUser, removeUser, setAccessToken, storeUser } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: UserStore = {
  isLoading: false,
  user: fetchUser(),
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user: UserAuth, thunkAPI) => {
    return registerUserThunk({ url: "/auth/register", user }, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user: UserAuth, thunkAPI) => {
    return loginUserThunk({ url: "/auth/login", user }, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/update-user",
  async (user: UserAuth, thunkAPI) => {
    return updateUserThunk({ url: "/auth/update-user", user }, thunkAPI);
  }
);

export const clearStore = createAsyncThunk(
  "user/clearStore",
  async (_, thunkAPI) => {
    return clearStoreThunk("User logged out successfully", thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUser();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { token, ...user } = action.payload;
      state.isLoading = false;
      state.user = user;
      setAccessToken(token);
      storeUser(user);
      toast.success(`Welcome, ${user.name}`);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, ...user } = action.payload;
      state.isLoading = false;
      state.user = user;
      setAccessToken(token);
      storeUser(user);
      toast.success(`Welcome back, ${user.name}`);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload as string);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload as string);
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(clearStore.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(clearStore.rejected, (state) => {
      state.isLoading = false;
      toast.error("There was an error logging out");
    });
    builder.addCase(clearStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const { token, ...user } = action.payload;
      state.user = user;
      storeUser(user);
      toast.success("Profile updated successfully");
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
      toast.error("There was an error updating your profile");
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
