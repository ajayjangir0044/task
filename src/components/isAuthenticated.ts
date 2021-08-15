export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  } else {
    return false;
  }
};
