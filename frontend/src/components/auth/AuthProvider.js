// frontend/src/components/auth/AuthProvider.js
import React, { createContext, useState, useContext } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Auth0Provider
      domain="modulogica.auth0.com"
      clientId="your_client_id"
      redirectUri={window.location.origin}
    >
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </Auth0Provider>
  );
};