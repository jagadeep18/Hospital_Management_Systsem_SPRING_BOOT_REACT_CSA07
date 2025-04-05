import { Calendar, Clock, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Appointment = {
  id: string;
  date: string;
  time: string;
  doctor: string;
  reason: string;
};

export function PatientDashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      date: '2023-11-15',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      reason: 'Regular Checkup'
    },
    {
      id: '2',
      date: '2023-11-20',
      time: '2:30 PM',
      doctor: 'Dr. Johnson',
      reason: 'Follow-up'
    }
  ]);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    doctor: '',
    reason: ''
  });

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const appointment = {
      id: Date.now().toString(),
      ...newAppointment
    };
    setAppointments([...appointments, appointment]);
    setNewAppointment({
      date: '',
      time: '',
      doctor: '',
      reason: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-2">Medical Dashboard</h1>
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

        {/* Book Appointment */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Plus size={20} /> Book New Appointment
          </h2>
          <form onSubmit={handleBookAppointment} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
              <input
                type="text"
                value={newAppointment.doctor}
                onChange={(e) => setNewAppointment({...newAppointment, doctor: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Dr. Smith"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
              <input
                type="text"
                value={newAppointment.reason}
                onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Checkup"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar size={20} /> Your Appointments
          </h2>
          {appointments.length === 0 ? (
            <p className="text-gray-500">No appointments scheduled</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appt) => (
                <div key={appt.id} className="border border-gray-200 rounded-lg p-4 group hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{appt.doctor}</h3>
                      <p className="text-gray-600">{appt.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock size={14} /> {appt.time}
                      </p>
                      <p className="text-sm text-gray-500">{appt.date}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to cancel this appointment?')) {
                          setAppointments(appointments.filter(a => a.id !== appt.id));
                        }
                      }}
                      className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
