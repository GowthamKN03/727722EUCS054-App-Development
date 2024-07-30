import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

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
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
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


        </form>
      </div>
    </div>
  );
}

export default Login;
