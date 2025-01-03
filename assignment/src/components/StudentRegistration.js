// src/components/StudentRegistration.js
import React, { useState } from 'react';

const StudentRegistration = ({ courseOfferings, registrations, setRegistrations }) => {
  const [selectedOffering, setSelectedOffering] = useState('');
  const [studentName, setStudentName] = useState('');

  const registerStudent = () => {
    if (!selectedOffering || studentName.trim() === '') {
      alert('Please select a course offering and enter a student name');
      return;
    }
    if (!registrations[selectedOffering]) {
      registrations[selectedOffering] = [];
    }
    registrations[selectedOffering].push(studentName);
    setRegistrations({ ...registrations });
    setStudentName('');
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <select onChange={(e) => setSelectedOffering(e.target.value)} value={selectedOffering}>
        <option value="">Select Course Offering</option>
        {courseOfferings.map((offering, index) => (
          <option key={index} value={offering}>{offering}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={studentName} 
        onChange={(e) => setStudentName(e.target.value)} 
        placeholder="Student Name" 
      />
      <button onClick={registerStudent}>Register Student</button>
      <h3>Registered Students</h3>
      {Object.keys(registrations).map((offering, index) => (
        <div key={index}>
          <h4>{offering}</h4>
          <ul>
            {registrations[offering].map((student, idx) => (
              <li key={idx}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentRegistration;