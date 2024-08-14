// import React from 'react';
// import Sidebar from '../admin1/Sidebar';
// import Navbar from '../admin1/Navbar';
// import MainContent from '../admin1/MainContent';

// const AdminDashboard = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <MainContent />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import Sidebar from '../admin1/Sidebar';
import Navbar from '../admin1/Navbar';
import MainContent from '../admin1/MainContent';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  );
};

export default AdminDashboard;
