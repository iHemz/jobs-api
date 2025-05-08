import type { store } from "@/store/store";

export type FeatureState = ReturnType<typeof store.getState>;
export type FeatureDispatch = typeof store.dispatch;
