import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsersTable from './UsersTable';
import DoctorsTable from './DoctorsTable';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">124</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Active Appointments</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Departments</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="flex space-x-4 mb-4">
            <button 
              onClick={() => navigate('/register-user')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register New User
            </button>
            <button 
              onClick={() => navigate('/departments')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Manage Departments
            </button>
          </div>
          <UsersTable />
        </div>

        {/* Doctor Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Doctor Management</h2>
          <DoctorsTable />
        </div>

        {/* Reports */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
              Generate Monthly Report
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              View Financial Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
