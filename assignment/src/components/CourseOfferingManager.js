// src/components/CourseOfferingManager.js
import React, { useState } from 'react';

const CourseOfferingManager = ({ courseTypes, courses, courseOfferings, setCourseOfferings }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const addCourseOffering = () => {
    if (!selectedType || !selectedCourse) {
      alert('Please select both course type and course');
      return;
    }
    const offering = `${selectedType} - ${selectedCourse}`;
    setCourseOfferings([...courseOfferings, offering]);
    setSelectedType('');
    setSelectedCourse('');
  };

  const deleteCourseOffering = (offering) => {
    setCourseOfferings(courseOfferings.filter(o => o !== offering));
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>
      <button onClick={addCourseOffering}>Add Course Offering</button>
      <ul>
        {courseOfferings.map((offering, index) => (
          <li key={index}>
            {offering} <button onClick={() => deleteCourseOffering(offering)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferingManager;