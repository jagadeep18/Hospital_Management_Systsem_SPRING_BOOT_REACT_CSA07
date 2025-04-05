import { useNavigate } from 'react-router-dom';
import AppointmentsTable from './AppointmentsTable';
import DoctorsTable from './DoctorsTable';
import UsersTable from './UsersTable';

const ReceptionistDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Receptionist Dashboard</h1>
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

        {/* Patient Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Patient Management</h2>
            <button 
                  onClick={() => navigate('/register-patient', { state: { from: 'receptionist' } })}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Register New Patient
            </button>
          </div>
          <UsersTable roleFilter="patient" />
        </div>

        {/* Appointments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Appointments</h2>
          <AppointmentsTable showPatientInfo={true} />
        </div>

        {/* Doctor Schedules */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Doctor Schedules</h2>
          <DoctorsTable />
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
