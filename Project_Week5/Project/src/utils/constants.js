export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/29578687?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/b3d0da7f-b685-4fd1-9c84-53e4e60aa0d7/US-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const supportedLanguages = [
  { identifier: "en", name: "English" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = "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";
