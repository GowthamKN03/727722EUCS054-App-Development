import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalizeGift = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { price, productname, productimage } = location.state || {};

  // State for handling form inputs
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedImage(URL.createObjectURL(file));
      setAlertMessage(''); 
    } else {
      setAlertMessage('Please upload a valid image file.');
    }
  };

  const handleBuyNow = () => {
    if (personalizedMessage && recipientName && uploadedImage) {
      navigate('/custom', { state: { 
        productName: productname, 
        productImage: productimage,
        personalizedMessage,
        recipientName,
        uploadedImage,
        price
      } });
    } else {
      setAlertMessage('Please fill in all fields and upload a valid image.');
    }
  };

  return (
    <div className='flex flex-col items-center p-6 bg-gray-50 min-h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-lg w-full'>
        <img src={productimage} alt={productname} className='w-full h-64 object-cover rounded-md mb-4' />
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{productname}</h1>
        <p className='text-2xl font-semibold text-gray-900 mb-6'>₹{price}</p>
        <form className='flex flex-col space-y-4'>
          <label className='text-lg font-medium text-gray-700'>
            Personalized Message:
            <textarea
              value={personalizedMessage}
              onChange={(e) => setPersonalizedMessage(e.target.value)}
              className='border border-gray-300 rounded-md p-2 mt-1 w-full h-32 resize-none'
              placeholder='Enter your personalized message here...'
            />
          </label>
          <label className='text-lg font-medium text-gray-700'>
            Recipient's Name:
            <input
              type='text'
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className='border border-gray-300 rounded-md p-2 mt-1 w-full'
              placeholder='Enter the recipient’s name'
            />
          </label>
          <label className='text-lg font-medium text-gray-700'>
            Upload an Image:
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              className='border border-gray-300 rounded-md p-2 mt-1 w-full'
            />
            {uploadedImage && (
              <img src={uploadedImage} alt='Uploaded preview' className='w-32 h-32 object-cover mt-2 rounded-md border border-gray-200' />
            )}
          </label>
          {alertMessage && (
            <div className='bg-red-100 text-red-700 border border-red-300 rounded-md p-3 mt-2'>
              {alertMessage}
            </div>
          )}
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105'
            onClick={handleBuyNow}
            type='button'
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalizeGift;
