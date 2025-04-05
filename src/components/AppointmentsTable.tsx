import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

type Appointment = {
  id: string;
  patientName: string;
  date: string;
  time: string;
  doctor: string;
  reason: string;
  status: 'confirmed' | 'pending' | 'cancelled';
};

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Doe',
    date: '2023-11-15',
    time: '10:00 AM',
    doctor: 'Dr. Smith',
    reason: 'Checkup',
    status: 'confirmed'
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    date: '2023-11-16',
    time: '2:30 PM',
    doctor: 'Dr. Johnson',
    reason: 'Follow-up',
    status: 'pending'
  }
];

type AppointmentsTableProps = {
  showPatientInfo?: boolean;
};

const AppointmentsTable = ({ showPatientInfo = false }: AppointmentsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {showPatientInfo && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                <Calendar className="mr-1" size={14} /> Date
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                <Clock className="mr-1" size={14} /> Time
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Doctor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reason
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockAppointments.map((appt) => (
            <tr key={appt.id}>
              {showPatientInfo && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <User className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{appt.patientName}</div>
                    </div>
                  </div>
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {appt.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {appt.time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {appt.doctor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {appt.reason}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${appt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                    appt.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                  {appt.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
