import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h1 style={{ color: 'white', margin: 0 }}>New Generation High School</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <a href="/students" style={{ color: 'white', textDecoration: 'none' }}>Students</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

