import React from 'react';
import DashboardImage from '../../../assets/imgs/hero-img.png';

export default function Dashboard() {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 50, fontSize: 30 }}>
        Welcome to Career Development
      </div>
      <div style={{ textAlign: 'center', marginTop: 50, fontSize: 30 }}>
        <img
          src={DashboardImage}
          style={{ width: '50%' }}
          alt='Main Dashboard'
        />
      </div>
    </>
  );
}
