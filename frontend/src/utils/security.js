// frontend/src/utils/security.js
import { jwtDecode } from 'jwt-decode';

export const securityConfig = {
  headers: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self'",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
};

export const validateToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};