import { useNavigate } from 'react-router-dom';
import AppointmentsTable from './AppointmentsTable';

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
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

        {/* Appointments */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Appointments</h2>
            <button 
              onClick={() => navigate('/book-appointment')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book New Appointment
            </button>
          </div>
          <AppointmentsTable />
        </div>

        {/* Medical Records */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">No records available</p>
          </div>
        </div>

        {/* Bills */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Bills</h2>
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">No bills available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
