import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form validation function
  const validateForm = () => {
    if (!email || !password) {
      toast.error('Email and password are required');
      return false;
    }
    if (currentState === 'Sign up' && !name) {
      toast.error('Full Name is required');
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    // Validate form before making the request
    if (!validateForm()) {
      return;
    }
  
    try {
      let response;
  
      if (currentState === 'Sign up') {
        response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
      } else {
        response = await axios.post(backendUrl + '/api/user/login', { email, password });
      }
  
  // Log response data to check structure
  
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success(currentState === 'Login' ? 'Logged in successfully!' : 'Account created successfully!');
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong, please try again.');
    }
  };
  

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={submitHandler} className='flex flex-col items-center w-[30%] sm:max-w-96 m-auto mt-14 gap-6 text-[#3a2e2e] font-parata'>
      {/* Updated Heading */}
      <h4 className='text-2xl sm:text-3xl md:text-4xl prata-regular mb-4 text-center'>
        {currentState} to Haute-Hue
      </h4>

      {currentState === 'Login' ? '' : (
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full px-4 py-3 border border-[#3a2e2e] rounded-xl'
          placeholder='Full Name'
          required
        />
      )}
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className='w-full px-4 py-3 border border-[#3a2e2e] rounded-xl'
        placeholder='Email Address'
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className='w-full px-4 py-3 border border-[#3a2e2e] rounded-xl'
        placeholder='Password'
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === 'Login' ? (
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className='cursor-pointer hover:text-[#5f4e4e]'>Forgot Password?</p>
            <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer hover:text-[#5f4e4e]'>
              Create an account
            </p>
          </div>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-[#5f4e4e]'>
            Login Here
          </p>
        )}
      </div>
      <button className='bg-[#3a2e2e] text-white font-light px-8 py-3 mt-4 rounded-xl hover:bg-[#5f4e4e] transition-all'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
