import React, { useState } from 'react';

function StudentInfo({ student }) {
  // ৫. State:for  Show/Hide Details 
  const [showDetails, setShowDetails] = useState(true);

  // ৬. Event Handling: for Say Hello 
  const handleSayHello = () => {
    alert("Hello, welcome to my React application!");
  };

  return (
    <div className="student-info-card">
      <img src={student.image} alt="Student Profile" className="profile-img" />
      <h2>{student.name}</h2>
      <p><strong>Student ID:</strong> {student.id}</p>
      
      {/* Show/Hide Button */}
      <button onClick={() => setShowDetails(!showDetails)} className="toggle-btn">
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditional Rendering & Props Data */}
      {showDetails && (
        <div className="details-section">
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Email:</strong> {student.email}</p>
          
          {/* ৮. Conditional Rendering for Active Status */}
          <p className={student.isActive ? "status-active" : "status-inactive"}>
            {student.isActive ? "Student is currently active." : "Student is currently inactive."}
          </p>
        </div>
      )}

      {/* Say Hello Button */}
      <button onClick={handleSayHello} className="hello-btn">
        Say Hello
      </button>
    </div>
  );
}

export default StudentInfo;