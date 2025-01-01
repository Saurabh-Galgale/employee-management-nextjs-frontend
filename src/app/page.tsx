import React from 'react';
import Header from './Header'; 

export default function Page() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1>Welcome to the Employee Management System</h1>
      </div>
    </div>
  );
}
