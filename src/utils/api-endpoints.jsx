export const API_ENDPOINT = {
  NOW_PLAYING: `3/movie/now_playing?`,
  NOW_POPULAR: `/api/v1/movie/popular`,
  NOW_SEARCH: `/api/v1/search/movie`,
  NOW_DETAIL: (id) => `/api/v1/movie/${id}`,
  REGISTER_USER: `/api/v1/auth/register`,
  LOGIN_USER: `/api/v1/auth/login`,
  GET_USER: `/api/v1/auth/me`,
};
