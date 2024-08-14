<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Pay = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolderName, setCardHolderName] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { recipientName, customMessage } = location.state || {};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/receipt', {
//       state: { recipientName, customMessage, cardHolderName, amount: '500' }
//     });
//   };

//   const handleChange = (e) => {
//     let value = e.target.value;
//     value = value.replace(/\D/g, '');
//     const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
//     setCardNumber(formattedValue);
//   };

//   return (
//     <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
//       <div className="w-72 h-44 bg-gradient-to-br from-yellow-300 to-red-400 rounded-lg p-4 text-white mb-8">
//         <div className="flex flex-col h-full justify-between">
//           <div className="text-xl font-bold">VISA</div>
//           <div className="text-lg tracking-wider">{cardNumber}</div>
//           <div className="flex justify-between text-sm">
//             <div>
//               <label className="block text-sm">Card Holder</label>
//               <div className='mt-1'>{cardHolderName}</div>
//             </div>
//             <div>
//               <label className="block text-sm">Expires</label>
//               <div className='mt-1'>{expiryDate}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col">
//           <label htmlFor="cardNumber" className="text-sm font-medium mb-2">Card Number</label>
//           <input
//             type="text"
//             id="cardNumber"
//             value={cardNumber}
//             onChange={handleChange}
//             placeholder="1234 5678 9012 3456"
//             maxLength={19}
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="cardHolder" className="text-sm font-medium mb-2">Card Holder</label>
//           <input
//             type="text"
//             id="cardHolder"
//             value={cardHolderName}
//             onChange={(e) => setCardHolderName(e.target.value)}
//             placeholder="John Doe"
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="expiryDate" className="text-sm font-medium mb-2">Expiry Date</label>
//           <input
//             type="month"
//             id="expiryDate"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             placeholder="MM/YY"
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="cvv" className="text-sm font-medium mb-2">CVV</label>
//           <input
//             type="password"
//             id="cvv"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             placeholder="123"
//             maxLength={3}
//             required
//             className="p-2 border border-gray-300 rounded-md text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
//           <input
//             type="text"
//             id="price"
//             value="500"
//             readOnly
//             className="p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Pay;

import React, { useState } from 'react';
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import { useLocation, useNavigate } from 'react-router-dom';

const Pay = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

<<<<<<< HEAD
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const {
        cardHolderName,
        totalAmount, // Use totalAmount from state
        firstName,
        lastName,
        address1,
        address2,
        zip,
        city,
        state,
        phone,
        email
      } = location.state;
  
      setCardHolderName(cardHolderName || '');
      setTotalAmount(totalAmount || 0); // Set totalAmount state
      setFirstName(firstName || '');
      setLastName(lastName || '');
      setAddress1(address1 || '');
      setAddress2(address2 || '');
      setZip(zip || '');
      setCity(city || '');
      setState(state || '');
      setPhone(phone || '');
      setEmail(email || '');
    }
  }, [location.state]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to hold all the data you want to pass
    const receiptData = {
      cardHolderName,
      amount: totalAmount, // Final total amount including shipping and taxes
      firstName,
      lastName,
      address1,
      address2,
      zip,
      city,
      state,
      phone,
      email
    };

    // Navigate to the /receipt page with receipt data
    navigate('/receipt', { state: receiptData });
  };
    // Navigate to the /receipt page with receipt data
   
=======
  const navigate = useNavigate();
  const location = useLocation();
  const { recipientName, customMessage, price } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/receipt', {
      state: { recipientName, customMessage, cardHolderName, amount: price }
    });
  };

>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
      <div className="w-72 h-44 bg-gradient-to-br from-yellow-300 to-red-400 rounded-lg p-4 text-white mb-8">
        <div className="flex flex-col h-full justify-between">
          <div className="text-xl font-bold">VISA</div>
          <div className="text-lg tracking-wider">{cardNumber}</div>
          <div className="flex justify-between text-sm">
            <div>
              <label className="block text-sm">Card Holder</label>
              <div className='mt-1'>{cardHolderName}</div>
            </div>
            <div>
              <label className="block text-sm">Expires</label>
              <div className='mt-1'>{expiryDate}</div>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardHolder" className="text-sm font-medium mb-2">Card Holder</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="John Doe"
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiryDate" className="text-sm font-medium mb-2">Expiry Date</label>
          <input
            type="month"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv" className="text-sm font-medium mb-2">CVV</label>
          <input
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength={3}
            required
            className="p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
          <input
            type="text"
            id="price"
<<<<<<< HEAD
            value={totalAmount}
=======
            value={price}
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            readOnly
            className="p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default Pay;
=======
export default Pay;


>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
