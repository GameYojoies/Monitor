const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  // console.log("getAccessToken:", token);
  return token;
};

export const setAccessToken = accessToken =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
