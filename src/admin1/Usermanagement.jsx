import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../admin1/Navbar';
import Sidebar from '../admin1/Sidebar';

const Usermanagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/all');
        const usersData = response.data;
        console.log(response.data);
        const filteredUsers = usersData.map(user => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }));

        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div><Navbar/>
    <Sidebar/>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Users</h2>
      {users.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left border-b border-gray-300">ID</th>
              <th className="p-3 text-left border-b border-gray-300">First Name</th>
              <th className="p-3 text-left border-b border-gray-300">Last Name</th>
              <th className="p-3 text-left border-b border-gray-300">Email</th>
              <th className="p-3 text-left border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border-b border-gray-200">{user.id}</td>
                <td className="p-3 border-b border-gray-200">{user.firstName}</td>
                <td className="p-3 border-b border-gray-200">{user.lastName}</td>
                <td className="p-3 border-b border-gray-200">{user.email}</td>
                <td className="p-3 border-b border-gray-200">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
    </div>
    </div>
  );
};

export default Usermanagement;
