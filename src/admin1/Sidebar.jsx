
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmile, faDashboard, faShoppingBag, faChartPie, faMessage, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <section 
//       id="sidebar" 
//       className={`fixed top-0 left-0 h-screen bg-gray-100 z-20 font-lato transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}
//     >
//       <button onClick={toggleSidebar} className="p-4 text-gray-800 absolute top-0 right-0">
//         <span className="text-2xl">×</span>
//       </button>
//       <a href="#" className="brand flex items-center text-blue-600 text-2xl font-bold p-6">
//         <FontAwesomeIcon icon={faSmile} className="mr-4" />
//         <span>AdminHub</span>
//       </a>
//       <ul className="side-menu top mt-12">
//         <li className="active p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faDashboard} className="mr-4" />
//             <span>Dashboard</span>
//           </a>
//         </li>
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faShoppingBag} className="mr-4" />
//             <span>My Store</span>
//           </a>
//         </li>
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faChartPie} className="mr-4" />
//             <span>Analytics</span>
//           </a>
//         </li>
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faMessage} className="mr-4" />
//             <span>Message</span>
//           </a>
//         </li>
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faUsers} className="mr-4" />
//             <span>Team</span>
//           </a>
//         </li>
//       </ul>
//       <ul className="side-menu absolute bottom-0 w-full p-6">
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
//             <FontAwesomeIcon icon={faCog} className="mr-4" />
//             <span>Settings</span>
//           </a>
//         </li>
//         <li className="p-2">
//           <a href="#" className="flex items-center p-2 rounded-lg text-red-500">
//             <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
//             <span>Logout</span>
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Sidebar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faDashboard, faShoppingBag, faChartPie, faMessage, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home'); 
  };
  const handleuser = () => {
    navigate('/Usermanage'); 
  };
  const handlesettings = () => {
    navigate('/settings'); 
  };

  const handleManageProduct = () => {
    navigate('/admina'); // Navigate to the Admina component
  };

  return (
    <section 
      id="sidebar" 
      className={`fixed top-0 left-0 h-screen bg-gray-100 z-20 font-lato transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}
    >
      <button onClick={toggleSidebar} className="p-4 text-gray-800 absolute top-0 right-0">
        <span className="text-2xl">×</span>
      </button>
      <a href="#" className="brand flex items-center text-blue-600 text-2xl font-bold p-6">
        <FontAwesomeIcon icon={faSmile} className="mr-4" />
        <span>AdminHub</span>
      </a>
      <ul className="side-menu top mt-12">
        <li className="active p-2">
          <a href="#" className="flex items-center p-2 rounded-lg text-gray-800">
            <FontAwesomeIcon icon={faDashboard} className="mr-4" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="p-2">
          <button onClick={handleManageProduct} className="flex items-center p-2 rounded-lg text-gray-800 w-full text-left">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-4" />
            <span>Manage Product</span>
          </button>
        </li>
        <li className="p-2">
          <button onClick={handleuser} className="flex items-center p-2 rounded-lg text-gray-800 w-full text-left">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-4" />
            <span>User</span>
          </button>
        </li>
        <li className="p-2">
        <button onClick={handlesettings} className="flex items-center p-2 rounded-lg text-gray-800 w-full text-left">
            <FontAwesomeIcon icon={faCog} className="mr-4" />
            <span>Settings</span>
            </button>
        </li>
        <li className="p-2">
          <button onClick={handleLogout} className="flex items-center p-2 rounded-lg text-red-500 w-full text-left">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
            <span>Logout</span>
          </button>
        </li>
          </ul>
      <ul className="side-menu absolute bottom-0 w-full p-6">
      </ul>
    </section>
  );
};

export default Sidebar;
