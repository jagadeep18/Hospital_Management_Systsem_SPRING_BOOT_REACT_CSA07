import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import { PatientDashboard } from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
// Role-specific dashboards
const DoctorDashboard = React.lazy(() => import('./components/DoctorDashboard'));
const ReceptionistDashboard = React.lazy(() => import('./components/ReceptionistDashboard'));
const PatientRegistrationForm = React.lazy(() => import('./components/PatientRegistrationForm'));

function useAuth() {
  const [user, setUser] = useState<{ role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      if (token && role) {
        setUser({ role });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    // Initial check
    checkAuth();

    // Listen for storage changes
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { user, setUser, loading };
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return <div className="p-4 text-red-500">Something went wrong.</div>;
  }

  return <>{children}</>;
}

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            <Route path="/login" element={<AuthForm type="login" />} />
            <Route path="/register" element={<AuthForm type="register" />} />
            <Route path="/register-patient" element={<PatientRegistrationForm />} />
            <Route path="/dashboard" element={
              user?.role === 'admin' ? <AdminDashboard /> :
              user?.role === 'doctor' ? <DoctorDashboard /> :
              user?.role === 'receptionist' ? <ReceptionistDashboard /> :
              user?.role === 'patient' ? <PatientDashboard /> :
              <Navigate to="/login" replace />
            } />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
