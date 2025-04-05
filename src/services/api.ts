import { AuthResponse, LoginCredentials, RegisterData, UserRole } from '../types/auth';

// Mock implementation for development
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    console.log('Mock login with:', credentials);
    
    // Special accounts with predefined roles
    let role: UserRole = 'patient';
    if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin123') {
      role = 'admin';
    } else if (credentials.email === 'doctor@gmail.com' && credentials.password === 'doctor123') {
      role = 'doctor';
    } else if (credentials.email === 'receptionist@gmail.com' && credentials.password === 'receptionist123') {
      role = 'receptionist';
    }

    return new Promise(resolve => setTimeout(() => {
      resolve({
        token: 'mock-token',
        user: {
          id: '1',
          email: credentials.email,
          firstName: 'Mock',
          lastName: 'User',
          role: role,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      });
    }, 1000));
  },
  
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    console.log('Mock register with:', userData);
    return new Promise(resolve => setTimeout(() => {
      resolve({
        token: 'mock-token',
        user: {
          id: '1',
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: userData.role || 'patient',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      });
    }, 1000));
  },

  logout: () => {
    console.log('Mock logout');
    localStorage.removeItem('token');
  }
};
