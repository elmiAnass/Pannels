// utils/auth.js
import jwtDecode from 'jwt-decode';

export const isAuthenticated = () => {
  // Check if the user is authenticated (replace with your actual authentication logic)
  const accessToken = localStorage.getItem('accessToken');
  // Check if the accessToken is present and not expired
  return accessToken !== null && !isTokenExpired(accessToken);
};

// Function to check if a JWT token is expired
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    // Check if the expiration time is in the future
    return decoded.exp < Date.now() / 1000;
  } catch (err) {
    return false; // In case of decoding error, assume the token is not expired
  }
};
