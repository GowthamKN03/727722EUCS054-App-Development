<<<<<<< HEAD
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
=======
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Custom = () => {
//   const [formData, setFormData] = useState({
//     recipientName: '',
//     Pic: '',
//     customMessage: '',
//   });
//   const [preview, setPreview] = useState(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'Pic' && files[0]) {
//       setFormData({ ...formData, [name]: files[0] });
//       setPreview(URL.createObjectURL(files[0]));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/pay', { state: formData });
//   };

//   const handlePreviewClick = () => {
//     setShowPreview(!showPreview);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Customize Your Gift</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col">
//           <label htmlFor="recipientName" className="text-sm font-medium mb-2">Recipient Name</label>
//           <input
//             type="text"
//             id="recipientName"
//             name="recipientName"
//             value={formData.recipientName}
//             onChange={handleChange}
//             placeholder="Enter recipient's name"
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="Pic" className="text-sm font-medium mb-2">Upload Photo</label>
//           <input
//             type="file"
//             id="Pic"
//             name="Pic"
//             onChange={handleChange}
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//           <button
//             type="button"
//             onClick={handlePreviewClick}
//             className="mt-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors"
//           >
//             {showPreview ? 'Hide Preview' : 'Show Preview'}
//           </button>
//           {showPreview && preview && (
//             <div className="mt-4">
//               <img src={preview} alt="Preview" className="w-full rounded-md" />
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="customMessage" className="text-sm font-medium mb-2">Custom Message</label>
//           <textarea
//             id="customMessage"
//             name="customMessage"
//             value={formData.customMessage}
//             onChange={handleChange}
//             placeholder="Enter your wishes"
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm resize-y h-24"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

const Custom = () => {
  const location = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
  const { productname, productimage, price } = location.state || {}; // Destructure product data

  const [formData, setFormData] = useState({
    recipientName: '',
    Pic: '', // Expecting a URL here
    customMessage: '',
    price: price || '' 
  });
  const [preview, setPreview] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'Pic') {
      setPreview(value); // Update preview to the URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        recipientName: formData.recipientName,
        Pic: formData.Pic,
        customMessage: formData.customMessage,
        price: formData.price
    };

    try {
        const response = await axios.post('http://localhost:8080/api/custom-gifts', data, {
            headers: { 'Content-Type': 'application/json' }
        });

        console.log('Response:', response.data);
        navigate('/checkout', { state: { ...formData, productname, productimage, price } });
    } catch (error) {
        console.error('Error creating custom gift:', error.response ? error.response.data : error.message);
    }
};
=======
  const { productName, productImage, personalizedMessage, recipientName, uploadedImage, price } = location.state || {};

  const [formData, setFormData] = useState({
    recipientName: recipientName || '',
    Pic: uploadedImage || '',
    customMessage: personalizedMessage || '',
    price: price || '' 
  });
  const [preview, setPreview] = useState(uploadedImage || null);
  const [showPreview, setShowPreview] = useState(!!uploadedImage);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Pic' && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pay', { state: { ...formData, productName, productImage, price } });
  };
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };

  return (
<<<<<<< HEAD
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customize Your Gift</h2>

        <div className="text-center mb-6">
          <img src={productimage} alt={productname} className="w-full h-64 object-cover rounded-md mb-2 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">{productname}</h3>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="recipientName" className="text-sm font-medium mb-2">Recipient Name</label>
            <input
              type="text"
              id="recipientName"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              placeholder="Enter recipient's name"
              required
              className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Pic" className="text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              id="Pic"
              name="Pic"
              value={formData.Pic}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handlePreviewClick}
              className="mt-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors"
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            {showPreview && preview && (
              <div className="mt-4">
                <img src={preview} alt="Preview" className="w-full rounded-md" />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="customMessage" className="text-sm font-medium mb-2">Custom Message</label>
            <textarea
              id="customMessage"
              name="customMessage"
              value={formData.customMessage}
              onChange={handleChange}
              placeholder="Enter your wishes"
              required
              className="p-3 border border-gray-300 rounded-md text-sm resize-y h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              required
              className="p-3 border border-gray-300 rounded-md text-sm bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
=======
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Customize Your Gift</h2>

      <div className="text-center mb-6">
        <img src={productImage} alt={productName} className="w-full h-64 object-cover rounded-md mb-2" />
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="recipientName" className="text-sm font-medium mb-2">Recipient Name</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            placeholder="Enter recipient's name"
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
            disabled
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Pic" className="text-sm font-medium mb-2">Upload Photo</label>
          <input
            type="file"
            id="Pic"
            name="Pic"
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md text-sm"
            disabled
          />
          <button
            type="button"
            onClick={handlePreviewClick}
            className="mt-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          {showPreview && preview && (
            <div className="mt-4">
              <img src={preview} alt="Preview" className="w-full rounded-md" />
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="customMessage" className="text-sm font-medium mb-2">Custom Message</label>
          <textarea
            id="customMessage"
            name="customMessage"
            value={formData.customMessage}
            onChange={handleChange}
            placeholder="Enter your wishes"
            required
            className="p-2 border border-gray-300 rounded-md text-sm resize-y h-24"
            disabled
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
            disabled
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
        >
          Submit
        </button>
      </form>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
    </div>
  );
};

<<<<<<< HEAD
export default Custom;
=======
export default Custom;
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
