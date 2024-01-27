"use client"
// pages/login.js
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const [loginError, setLoginError] = useState(false);
      const [authenticated, setAuthenticated] = useState(false);
      const [redirecting, setRedirecting] = useState(false);
    
      useEffect(() => {
        // Set a timeout for automatic logout after 24 hours (adjust as needed)
        const timeoutId = setTimeout(() => {
          setAuthenticated(false);
          setRedirecting(true);
          localStorage.removeItem('accessToken');
          setTimeout(() => {
            setRedirecting(false);
            window.location.href = '/auth';
          }, 2000);
        }, 24 * 60 * 60 * 1000); // 24 hours
    
        // Clear the timeout if the component unmounts or user logs in
        return () => clearTimeout(timeoutId);
      }, [authenticated]);
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    
        // Reset login error when input changes
        setLoginError(false);
      };
      
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        // Simulate asynchronous authentication
        try {
          // Example authentication check (replace with your actual authentication logic)
          if (formData.username === 'admin' && formData.password === 'khalil@123456') {
            // Simulate a delay for better user experience
            setRedirecting(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
    
            // Simulate storing a token in localStorage
            localStorage.setItem('accessToken', 'your_access_token');
    
            // Set authenticated to true after successful login
            setAuthenticated(true);
    
            // Redirect to a secure page after successful login
            window.location.href = '/Pannelkhalil';
          } else {
            // Set login error to true if the credentials are incorrect
            setLoginError(true);
          }
        } finally {
          // Ensure redirecting flag is reset even in case of an error
          setRedirecting(false);
        }
      };
    
      if (redirecting) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xl font-semibold">You are authenticated! Redirecting to Pannel</p>
            <div className="loader mt-4"></div>
          </div>
          
        );
      }
    
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
        </div>
    <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleInputChange}
                className={`appearance-none block w-full px-3 py-2 border ${
                  loginError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className={`appearance-none block w-full px-3 py-2 border ${
                  loginError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>

          {loginError && (
            <p className="text-red-500 text-sm mt-2">Invalid username or password. Please try again.</p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
    </form>
      </div>
    </div>
  );
};

export default Login;
