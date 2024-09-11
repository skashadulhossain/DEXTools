import React from 'react';
import './UserAreaNavbar.css';

const UserAreaNavbar = () => {
  return (
    <nav className="UserAreaNavbar-container">
      <div className="UserAreaNavbar-logo">
        <svg className="UserAreaNavbar-logo-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="UserAreaNavbar-logo-text">User area</span>
        <span className="UserAreaNavbar-beta-tag">beta</span>
      </div>
      <div className="UserAreaNavbar-right">
        <a href="#" className="UserAreaNavbar-link">GO TO APP</a>
      </div>
    </nav>
  );
};

export default UserAreaNavbar;