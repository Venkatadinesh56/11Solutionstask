// src/components/CourseTypeManager.js
import React, { useState } from 'react';

const CourseTypeManager = ({ courseTypes, setCourseTypes }) => {
  const [newType, setNewType] = useState('');

  const addCourseType = () => {
    if (newType.trim() === '') {
      alert('Course type cannot be empty');
      return;
    }
    setCourseTypes([...courseTypes, newType]);
    setNewType('');
  };

  const deleteCourseType = (type) => {
    setCourseTypes(courseTypes.filter(t => t !== type));
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input 
        type="text" 
        value={newType} 
        onChange={(e) => setNewType(e.target.value)} 
        placeholder="New Course Type" 
      />
      <button onClick ={addCourseType}>Add Course Type</button>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type} <button onClick={() => deleteCourseType(type)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManager;