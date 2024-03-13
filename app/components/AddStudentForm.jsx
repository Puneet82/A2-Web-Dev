// Mark this component as a Client Component
"use client";

// AddStudentForm.js (Client Component)
import React, { useState } from 'react';

const AddStudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server for processing
    const newStudent = { firstName, lastName, grade };
    fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New student added:', data);
        // Reset form fields after successful submission
        setFirstName('');
        setLastName('');
        setGrade('');
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="firstName" style={{ marginRight: '10px' }}>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="lastName" style={{ marginRight: '10px' }}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="grade" style={{ marginRight: '10px' }}>Grade:</label>
          <input
            type="number"
            id="grade"
            value={grade}
            onChange={e => setGrade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
