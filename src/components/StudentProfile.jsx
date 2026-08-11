import React from 'react';
import StudentInfo from './StudentInfo';

function StudentProfile({ studentData }) {
  // ৭. List Rendering: Skills Array
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git"
  ];

  return (
    <section className="profile-section">
      <StudentInfo student={studentData} />

      {/* Skills List */}
      <div className="skills-container">
        <h3>My Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StudentProfile; 