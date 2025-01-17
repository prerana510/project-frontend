import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';

const AdminNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <h1>Admin Dashboard</h1>
      <div className={styles.profile}>
        <button onClick={toggleMenu} className={styles.profileButton}>
          Profile
        </button>
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <button>Account Settings</button>
            <button>Help</button>
            <button>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
