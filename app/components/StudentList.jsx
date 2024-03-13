import React, { useState, useEffect } from 'react'; // Import useState from 'react'

const StudentList = () => {
  const [students, setStudents] = useState([]); // Use useState hook to declare students state

  useEffect(() => {
    // Fetch list of students from students.json
    fetch('/students.json')
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Student List</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {students.map(student => (
          <li key={student.id} style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>{student.firstName} {student.lastName}</span> - Grade {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
