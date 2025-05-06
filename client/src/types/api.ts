export type FetchType = {
  url: string;
  method?: string;
  body?: object;
  headers?: object;
  isStream?: boolean;
  skipAuth?: boolean;
  cache?: RequestCache;
};
