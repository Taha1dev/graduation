export const setToken = (newToken) => {
  if (newToken) {
    localStorage.setItem('ACCESS_TOKEN', newToken);
  } else {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
};

export const removeToken = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('ACCESS_TOKEN');
  }
};