import React, { useState } from 'react';
import axios from 'axios';
import { backUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success('Welcome back, Admin!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF9F3] px-4">
      <div className="bg-white text-[#4B3A2F] shadow-xl rounded-2xl px-8 py-10 w-full max-w-md prata-regular border border-[#EAD7C3]">
        <h1 className="text-[28px] sm:text-[34px] text-center mb-6 tracking-wide">Admin Login</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div>
            <label className="text-sm mb-2 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#D6B69C] bg-[#FCF7F2] focus:outline-none focus:ring-2 focus:ring-[#EAD7C3]"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#D6B69C] bg-[#FCF7F2] focus:outline-none focus:ring-2 focus:ring-[#EAD7C3]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#EAD7C3] text-[#4B3A2F] px-4 py-3 rounded-xl hover:bg-[#e4cdb5] transition-all duration-300 font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
