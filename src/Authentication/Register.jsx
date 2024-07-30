import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      user: user,
      password: password
    };

    axios.post('http://localhost:8080/gift', userData)
      .then((res) => {
        console.log(res.data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error("Something went wrong: " + error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <p className="mt-4 text-center mb-4">
            Already have an account?
            <a href="/Login" className="text-blue-500 hover:underline"> Login</a>
          </p>
          <GoogleLogin
            onSuccess={credentialResponse => {
            console.log(credentialResponse);
            }}
            onError={() => {
            console.log('Login Failed');
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from '@react-oauth/google';

// const Register = () => {
//   const [user, setUser] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   // Ensure Google OAuth initialization
//   useEffect(() => {
//     // This script tag should be added in your public/index.html
//     if (window.gapi) {
//       window.gapi.load('auth2', () => {
//         window.gapi.auth2.init({
//           client_id: '874888114408-0od2o09ugoa3jat7ddcrsv92gfbnluhp.apps.googleusercontent.com', // Replace with your actual client ID
//         });
//       });
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = {
//       user: user,
//       password: password
//     };

//     axios.post('http://localhost:8080/gift', userData)
//       .then((res) => {
//         console.log(res.data);
//         navigate('/Login');
//       })
//       .catch((error) => {
//         console.error("Something went wrong: " + error);
//       });
//   };

//   const handleGoogleLoginSuccess = (credentialResponse) => {
//     console.log('Google Sign-In successful:', credentialResponse);
//     // You might want to send the token to your backend for further processing
//     axios.post('http://localhost:8080/google-login', { token: credentialResponse.credential })
//       .then((res) => {
//         console.log('Backend response:', res.data);
//         navigate('/Home'); // Redirect on successful login
//       })
//       .catch((error) => {
//         console.error('Error during Google Sign-In:', error);
//       });
//   };

//   const handleGoogleLoginError = () => {
//     console.log('Google Sign-In failed');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email ID</label>
//             <input
//               type="email"
//               value={user}
//               onChange={(e) => setUser(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//           >
//             Register
//           </button>
//           <p className="mt-4 text-center mb-4">
//             Already have an account?
//             <a href="/Login" className="text-blue-500 hover:underline"> Login</a>
//           </p>
//           <GoogleLogin
//             onSuccess={handleGoogleLoginSuccess}
//             onError={handleGoogleLoginError}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


