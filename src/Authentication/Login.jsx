import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

<<<<<<< HEAD
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
      console.log('Login Success:', response.data);

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      navigate('/home');
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/iconic-gift-box-symbolizing-rewards-giveawa-00443-02_1148322-15317.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-100 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
=======
//import { GoogleLogin } from 'react-google-login';

const clientId="874888114408-0od2o09ugoa3jat7ddcrsv92gfbnluhp.apps.googleusercontent.com";

const Login = () => {
  const [userr, setuser] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/gift');
      const users = response.data;
      console.log('fetch', users);

      const userd = users.find(
        (user) => user.user === userr && user.password === password
      );
      console.log("Matched User: ", userd); 

      if (userd) {
        navigate('/home');
      } else {
        setError("Invalid username or password");
      }

    } catch (error) {
      setError("An error occurred abccc");
      console.log("error", error);
    }
  }

  const handleRegister=(e)=>{
    e.preventDefault();
    navigate("/register")
  }

  //login with google oAuth

  const onSuccess=(res)=>{
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
  }

  const onFailure=(res)=>{
    console.log("LOGIN FAILED! res: ",res);
  }

  return (
    <div className=" flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              value={userr}
              onChange={(e) => setuser(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-200"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            New User? 
            <button className="text-blue-500 hover:underline" onClick={handleRegister}> Register</button>
          </div>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log("LOGIN SUCCESS! Current User: ", credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
=======
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <div className='mt-4 text-center mb-4'>
            New User ? <button className='text-blue-500 hover:underline' onClick={handleRegister}><a>Register</a></button>
          </div>

          <GoogleLogin
            onSuccess={credentialResponse => {
            console.log(credentialResponse);
            }}
            onError={() => {
            console.log('Login Failed');
            }}
          />

          {/* <GoogleLogin 
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          /> */}


>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

export default Login;
