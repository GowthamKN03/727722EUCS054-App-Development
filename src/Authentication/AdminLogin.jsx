
<<<<<<< HEAD
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// const AdminLogin = () => {
//   const [userr, setuser] = useState('');
//   const [password, setpassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handlesubmit = async (event) => {
//     event.preventDefault();

//     if (userr === 'admin@gmail.com' && password === 'admin') {
//       navigate('/admin');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//         <form onSubmit={handlesubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email ID</label>
//             <input
//               type="email"
//               value={userr}
//               onChange={(e) => setuser(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4 relative">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//             <div 
//               onClick={togglePasswordVisibility} 
//               className="mt-8 absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//             >
//               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </div>
//           </div>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const AdminLogin = () => {
  const [userr, setuser] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (userr === 'admin@gmail.com' && password === 'admin') {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
<<<<<<< HEAD
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-realistic-particle-background_23-2148409681.jpg?size=626&ext=jpg&ga=GA1.1.195038459.1722242882&semt=ais_hybrid)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
=======
    <div className="flex items-center justify-center min-h-screen bg-black">
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
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
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <div 
              onClick={togglePasswordVisibility} 
              className="mt-8 absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

<<<<<<< HEAD
=======

>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
