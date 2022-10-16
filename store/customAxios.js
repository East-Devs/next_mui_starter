import customAxios from 'axios';

const setAuthHeader = (token) => {
  customAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export { setAuthHeader };
export default customAxios;
