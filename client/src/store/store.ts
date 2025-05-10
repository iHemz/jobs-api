import toolsReducer from "@/features/tools/toolsSlice";
import userReducer from "@/features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "util-storage",
  storage,
};

const persistedReducer = persistReducer(persistConfig, toolsReducer);

export const store = configureStore({
  reducer: { tools: persistedReducer, user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
