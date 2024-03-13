// Mark this component as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import Layout from './layout'; 
import StudentList from './components/StudentList';

const Page = () => {
  const [AddStudentForm, setAddStudentForm] = useState(null);

  useEffect(() => {
    import('./components/AddStudentForm').then(module => {
      setAddStudentForm(module.default);
    }).catch(error => {
      console.error('Failed to load AddStudentForm component:', error);
    });
  }, []);

  return (
    <Layout>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: 'blue', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Student Portal</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', textAlign: 'left' }}>
            <StudentList />
            {AddStudentForm && <AddStudentForm />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
