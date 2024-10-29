// src/components/AdminDashboardLayout.tsx
import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import styles from '../styles/dashboardLayout.module.css'; // Ensure you import your CSS module here

const AdminDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.adminDashboardLayout}>
      <div className={styles.navbarContainer}>
        <AdminNavbar />
      </div>
      <div className={styles.layoutMain}>
        <div className={styles.contentArea}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
