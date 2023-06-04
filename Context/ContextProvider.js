import { useContext, useState } from 'react';
import React from 'react';

export const stateContext = React.createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('ACCESS_TOKEN')
      : null
  );
  const setToken = (newToken) => {
    _setToken(newToken);
    if (newToken) {
      localStorage.setItem('ACCESS_TOKEN', newToken);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };
  return (
    <stateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
