# Medical Management System

This is a web-based Medical Management System built using React, TypeScript, and Tailwind CSS. It provides a platform for managing patients, appointments, doctors, and other administrative tasks within a medical facility.

## Features

-   **User Roles:** Supports multiple user roles including Admin, Receptionist, Doctor, and Patient.
-   **Authentication:** Secure login and registration system.
-   **Patient Management:**
    -   Register new patients.
    -   View and manage patient information.
-   **Appointment Management:**
    -   Book new appointments.
    -   View, edit, and cancel appointments.
    -   Manage appointment schedules.
-   **Doctor Management:**
    -   View doctor schedules.
    -   Manage doctor information.
-   **Admin Panel:**
    -   Manage users and their roles.
    -   Generate reports.
    -   Manage departments.
-   **Responsive Design:** Optimized for various screen sizes.
- **Billing:**
    - Billing management for receptionist.
- **Medical Records:**
    - Medical records for patients.

![online_viewer_net](https://github.com/user-attachments/assets/e2229e91-71a3-4ad9-ac2a-1ca1e4e4862d)

  


**Explanation of Key Directories and Files:**

-   **`public/`:** Contains the `index.html` file, which is the main HTML file for the application.
-   **`src/components/`:** This directory houses all the React components used in the application.
    -   `AdminDashboard.tsx`: The main dashboard for the admin user.
    -   `AppointmentsTable.tsx`: A table component to display appointments.
    -   `AuthForm.tsx`: A form component for login and registration.
    -   `Dashboard.tsx`: A dashboard for patients.
    -   `DoctorDashboard.tsx`: The main dashboard for the doctor user.
    -   `DoctorsTable.tsx`: A table component to display doctors.
    -   `PatientDashboard.tsx`: The main dashboard for the patient user.
    -   `PatientEditModal.tsx`: A modal for editing patient information.
    -   `PatientRegistrationForm.tsx`: A form for registering new patients.
    -   `ReceptionistDashboard.tsx`: The main dashboard for the receptionist user.
    - `ReceptionistDashboardNew.tsx`: The main dashboard for the receptionist user with tabs.
    -   `UsersTable.tsx`: A table component to display users.
    - `UsersTableNew.tsx`: A table component to display users with edit and deactivate options.
-   **`src/services/`:** Contains the `api.ts` file, which handles API calls to the backend.
-   **`src/types/`:** Contains the `auth.ts` file, which defines TypeScript types for authentication-related data.
-   **`src/App.tsx`:** The root component of the application, responsible for routing and rendering other components.
-   **`src/index.tsx`:** The entry point of the React application, rendering the `App` component into the DOM.
-   **`package.json`:** Lists project dependencies and scripts for development and building.
-   **`tsconfig.json`:** Configures the TypeScript compiler.
-   **`tailwind.config.js`:** Configures Tailwind CSS.
- **`postcss.config.js`:** Configures PostCSS.
- **`bg.jpg`:** background image for login and register pages.

## Execution

### Prerequisites

-   **Node.js:** Make sure you have Node.js (version 16 or later) installed on your system. You can download it from https://nodejs.org/.
-   **npm (Node Package Manager):** npm is usually installed with Node.js.
- **Backend API:** You need to have a backend API running that this frontend application can communicate with. The `src/services/api.ts` file will need to be configured to point to your backend API's URL.

### Steps to Run the Application

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd medical-management-system
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This command installs all the required packages listed in the `package.json` file.

3.  **Start the Development Server:**
    ```bash
    npm start
    ```
    This command starts the development server and opens the application in your default web browser. You can usually access it at `http://localhost:3000`.

4.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command creates an optimized build of the application in the `build` directory. You can then deploy the contents of this directory to a web server.

### Detailed Execution Explanation

1.  **`npm install`:**
    -   This command reads the `package.json` file.
    -   It downloads all the packages listed under `dependencies` and `devDependencies`.
    -   It installs these packages in the `node_modules` directory.
    -   This step is crucial because it sets up the project with all the necessary libraries and tools.

2.  **`npm start`:**
    -   This command executes the `start` script defined in `package.json`.
    -   Typically, this script uses a tool like `react-scripts` to start a development server.
    -   The development server:
        -   Watches for changes in your source code.
        -   Automatically rebuilds and reloads the application in the browser when changes are detected.
        -   Provides hot-reloading, which means you can see changes in real-time without a full page refresh.
        -   Serves the application on `http://localhost:3000` (or a similar address).

3.  **`npm run build`:**
    -   This command executes the `build` script defined in `package.json`.
    -   This script uses tools like `react-scripts` to:
        -   Bundle all your JavaScript, CSS, and other assets into optimized files.
        -   Minify and compress the code to reduce file sizes.
        -   Create a `build` directory containing the production-ready files.
    -   The contents of the `build` directory are what you would deploy to a web server.


5. **Accessing the Application:**
    - After running `npm start`, open your web browser and go to `http://localhost:3000`.
    - You should see the login or registration page.
    - After logging in, you will be redirected to the appropriate dashboard based on your role.


