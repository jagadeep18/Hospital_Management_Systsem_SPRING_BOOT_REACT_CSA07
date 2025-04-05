import { Calendar, UserPlus, FileText, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppointmentsTable from './AppointmentsTable';
import DoctorsTable from './DoctorsTable';
import UsersTable from './UsersTable';
import { useState } from 'react';

export default function ReceptionistDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appointments');

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

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex border-b">
            <button
              className={`px-4 py-3 font-medium flex items-center ${activeTab === 'appointments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('appointments')}
            >
              <Calendar className="mr-2" size={18} />
              Appointments
            </button>
            <button
              className={`px-4 py-3 font-medium flex items-center ${activeTab === 'patients' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('patients')}
            >
              <UserPlus className="mr-2" size={18} />
              Patients
            </button>
            <button
              className={`px-4 py-3 font-medium flex items-center ${activeTab === 'schedules' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('schedules')}
            >
              <Clock className="mr-2" size={18} />
              Schedules
            </button>
            <button
              className={`px-4 py-3 font-medium flex items-center ${activeTab === 'billing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('billing')}
            >
              <FileText className="mr-2" size={18} />
              Billing
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'appointments' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Appointment Management</h2>
                  <button 
                    onClick={() => navigate('/new-appointment')}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    New Appointment
                  </button>
                </div>
                <AppointmentsTable showPatientInfo={true} />
              </div>
            )}

            {activeTab === 'patients' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Patient Management</h2>
                  <button 
                    onClick={() => navigate('/register-patient')}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Register New Patient
                  </button>
                </div>
                <UsersTable roleFilter="patient" />
              </div>
            )}

            {activeTab === 'schedules' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Doctor Schedules</h2>
                <DoctorsTable />
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Billing Management</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Billing functionality coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
