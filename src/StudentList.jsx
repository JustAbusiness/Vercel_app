
import React, { useState } from "react";

const StudentList = ({ students }) => {
  const [checkedStudents, setCheckedStudents] = useState([]);

  const handleCheckboxChange = (studentId) => {
    
    if (checkedStudents.includes(studentId)) {
      setCheckedStudents((prevChecked) =>
        prevChecked.filter((id) => id !== studentId)
      );
    } else {
    
      setCheckedStudents((prevChecked) => [...prevChecked, studentId]);
    }
  };

  return (
    <div>
      {students.map((student) => (
        
        <div key={student.id}>

          <span>{student.name}</span>
          <input
            type="checkbox"
            checked={checkedStudents.includes(student.id)}
            onChange={() => handleCheckboxChange(student.id)}
          />
        </div>
      ))}
      <div>
        <h2>Choose Students:</h2>
        <ul>
          {students
            .filter((student) => checkedStudents.includes(student.id))
            .map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
