import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSettings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    siteTitle: 'Gift Portal',
    emailNotifications: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    // Logic to save settings (e.g., make an API call)
    console.log('Settings saved:', settings);

    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div className="p-8 bg-gray-50 shadow-lg rounded-xl">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Admin Settings</h2>

      <div className="mb-6">
        <label htmlFor="siteTitle" className="block text-lg font-semibold text-gray-700 mb-2">
          Site Title
        </label>
        <input
          type="text"
          name="siteTitle"
          value={settings.siteTitle}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="emailNotifications" className="block text-lg font-semibold text-gray-700 mb-2">
          Email Notifications
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="h-6 w-6 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 transition duration-200 mr-3"
          />
          <span className="text-gray-800 text-base">Enable Email Notifications</span>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="maintenanceMode" className="block text-lg font-semibold text-gray-700 mb-2">
          Maintenance Mode
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
            className="h-6 w-6 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 transition duration-200 mr-3"
          />
          <span className="text-gray-800 text-base">Enable Maintenance Mode</span>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200"
      >
        Save Settings
      </button>
    </div>
  );
};

export default AdminSettings;
