import axios from 'axios';
import swal from 'sweetalert';
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add common headers to all requests
    config.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'ACCESS_TOKEN'
    )}`;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Modify response before returning
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    } else if (response.status === 404) {
      // Handle 404 errors by rendering a 404 component
      <NotFound />;
    } else if (response.status === 500) {
      // Handle internal server errors by showing an error message
      swal.fire({
        icon: 'error',
        title: 'Internal server error',
        text: 'Please try again later.',
      });
    }
    return response;
  },
  (error) => {
    // Handle errors before returning
    return Promise.reject(error);
  }
);

export default axiosClient;
