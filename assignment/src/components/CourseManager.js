// src/components/CourseManager.js
import React, { useState } from 'react';

const CourseManager = ({ courses, setCourses }) => {
  const [newCourse, setNewCourse] = useState('');

  const addCourse = () => {
    if (newCourse.trim() === '') {
      alert('Course cannot be empty');
      return;
    }
    setCourses([...courses, newCourse]);
    setNewCourse('');
  };

  const deleteCourse = (course) => {
    setCourses(courses.filter(c => c !== course));
  };

  return (
    <div>
      <h2>Courses</h2>
      <input 
        type="text" 
        value={newCourse} 
        onChange={(e) => setNewCourse(e.target.value)} 
        placeholder="New Course" 
      />
      <button onClick={addCourse}>Add Course</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course} <button onClick={() => deleteCourse(course)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;