// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Adjust the path according to your project structure

// function ProfilePage() {
//   const [profile, setProfile] = useState({
//     name: '',
//     city: '',
//     phone: '',
//     address: '',
//     gender: '',
//     photoURL: 'https://via.placeholder.com/100', // Initial placeholder image URL
//   });
  
//   const [isEditingPhoto, setIsEditingPhoto] = useState(false);
//   const [newPhotoURL, setNewPhotoURL] = useState('');

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handlePhotoURLChange = (e) => {
//     setNewPhotoURL(e.target.value);
//   };

//   const handleSave = () => {
//     console.log('Profile saved', profile);
//     // Here you would typically send the data to a server
//   };

//   const handleSavePhotoURL = () => {
//     setProfile({
//       ...profile,
//       photoURL: newPhotoURL,
//     });
//     setIsEditingPhoto(false); // Hide the input field after saving
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar /> {/* Include the Navbar component here */}
//       <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
//         <div className="max-w-md w-full p-4 bg-white shadow-md rounded-lg relative">
//           <div className="text-center">
//             <div className="relative">
//               <img
//                 src={profile.photoURL} // Use the photoURL state for the image source
//                 alt="Profile"
//                 className="rounded-full w-24 h-24 mx-auto"
//               />
//               <button
//                 onClick={() => setIsEditingPhoto(!isEditingPhoto)} // Toggle photo URL input visibility
//                 className="absolute right-0 bottom-0 bg-gray-700 text-white text-sm px-3 py-1 rounded-full"
//               >
//                 Change profile photo
//               </button>
//               {isEditingPhoto && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//                   <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//                     <h2 className="text-lg font-semibold mb-4">Enter New Photo URL</h2>
//                     <input
//                       type="text"
//                       value={newPhotoURL}
//                       onChange={handlePhotoURLChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
//                       placeholder="Enter photo URL"
//                     />
//                     <div className="flex justify-end">
//                       <button
//                         onClick={handleSavePhotoURL}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setIsEditingPhoto(false)} // Cancel button to close the input box
//                         className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
          
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               name="city"
//               value={profile.city}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={profile.address}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex items-center mt-1">
//               <label className="inline-flex items-center mr-4">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={profile.gender === 'Male'}
//                   onChange={handleChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Male</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={profile.gender === 'Female'}
//                   onChange={handleChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Female</span>
//               </label>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <button
//               onClick={handleSave}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//           <div className="mt-4 text-center">
//             <button className="text-red-500 hover:underline">Change password</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProfilePage;

import React, { useState } from 'react';
import Navbar from './Navbar';

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    city: '',
    phone: '',
    address: '',
    gender: '',
    photoURL: 'https://via.placeholder.com/100',
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [newPhotoURL, setNewPhotoURL] = useState('');

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoURLChange = (e) => {
    setNewPhotoURL(e.target.value);
  };

  const handleSave = () => {
    // This simulates saving the profile and updates the state
    setProfile({ ...profile });
    setIsEditing(false); // Exit edit mode after saving
    console.log('Profile saved', profile); // For debugging
  };

  const handleSavePhotoURL = () => {
    setProfile({
      ...profile,
      photoURL: newPhotoURL,
    });
    setIsEditingPhoto(false); // Hide the input field after saving

    console.log('Profile updated with new photo URL', profile); // For debugging
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-4 bg-white shadow-md rounded-lg relative">
          <div className="text-center">
            <div className="relative">
              <img
                src={profile.photoURL}
                alt="Profile"
                className="rounded-full w-24 h-24 mx-auto"
              />
              <button
                onClick={() => setIsEditingPhoto(!isEditingPhoto)}
                className="absolute right-0 bottom-0 bg-gray-700 text-white text-sm px-3 py-1 rounded-full"
              >
                Change profile photo
              </button>
              {isEditingPhoto && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h2 className="text-lg font-semibold mb-4">Enter New Photo URL</h2>
                    <input
                      type="text"
                      value={newPhotoURL}
                      onChange={handlePhotoURLChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                      placeholder="Enter photo URL"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={handleSavePhotoURL}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditingPhoto(false)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Edit/View Toggle */}
          <div className="mt-6 text-center">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 ml-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            )}
          </div>

          {isEditing ? (
            <>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Name:</h2>
                <p>{profile.name}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">City:</h2>
                <p>{profile.city}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Phone Number:</h2>
                <p>{profile.phone}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Address:</h2>
                <p>{profile.address}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Gender:</h2>
                <p>{profile.gender}</p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
