import { useContext, useState, useMemo } from 'react';
import React from 'react';

export const stateContext = React.createContext({
  user: null,
  token: null,
  setUser: () => {},
  setContextToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('ACCESS_TOKEN')
      : null
  );

  const contextValue = useMemo(() => {
    return {
      user,
      token,
      setUser,
      setToken,
    };
  }, [user, token]);

  return (
    <stateContext.Provider value={contextValue}>
      {children}
    </stateContext.Provider>
  );
};
