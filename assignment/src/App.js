// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import CourseOfferingManager from './components/CourseOfferingManager';
import StudentRegistration from './components/StudentRegistration';

const App = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [registrations, setRegistrations] = useState({});

  return (
    <div className="container">
      <h1>Student Registration System</h1>
      <CourseTypeManager courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
      <CourseManager courses={courses} setCourses={setCourses} />
      <CourseOfferingManager 
        courseTypes={courseTypes} 
        courses={courses} 
        courseOfferings={courseOfferings} 
        setCourseOfferings={setCourseOfferings} 
      />
      <StudentRegistration 
        courseOfferings={courseOfferings} 
        registrations={registrations} 
        setRegistrations={setRegistrations} 
      />
    </div>
  );
};

export default App;