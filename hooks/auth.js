import { useState, useEffect } from 'react';
import useSWR  from 'swr'; // Right
import { useRouter } from 'next/router';
import axiosClient from '@/lib/axiosClent';
export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();
  // Loading
  const [isLoading, setLoading] = useState(true);
  // User
  const {
    data: user,
    error,
    mutate,
  } = useSWR('/user', () =>
    axiosClient
      .get('')
      .then((response) => response.data.data)
      .catch((error) => {
        if (error.response.status != 409) throw error;
      })
  );

  // CSRF
  const csrf = () => axiosClient.get('sanctum/csrf-cookie');
  // Login
  const login = async ({ setErrors, ...props }) => {
    setErrors([]);
    await csrf();
    axiosClient
      .post('/login', props)
      .then(() => mutate() && router.push('/pages/Admin/'))
      .catch((error) => {
        if (error.response.status != 422) {
          throw error;
          setErrors(Object.values(error.response.data.errors));
        }
      });
  };

  // Logout
  const logout = async () => {
    axiosClient.post('/logout');
    mutate(null);
    router.push('/Home/Login');
  };
  useEffect(() => {
    if (user || error) {
      setLoading(false);
    }
    if (middleware === 'guest' && user) {
      router.push('/');
    }
    if (middleware === 'auth' && error) {
      router.push('/Home/Login');
    }
  });
  return {
    user,
    isLoading,
    csrf,
    logout,
    login,
  };
};
// export default useAuth;
