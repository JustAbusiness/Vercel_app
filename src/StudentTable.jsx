
import React from 'react';

const StudentTable = ({ students }) => {
  const itStudents = [];
  const seStudents = [];

  students.forEach((student) => {
    if (student.major === 'IT') {
      itStudents.push(student);
    } else if (student.major === 'SE') {
      seStudents.push(student);
    }
  });


  const renderTable = (students) => {
    students.sort((a, b) => b.GPA - a.GPA);

    return students.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.major}</td>
        <td>{student.GPA}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div>
        <h2>IT Students</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Major</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>{renderTable(itStudents)}</tbody>
        </table>
      </div>

      <div>
        <h2>SE Students</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Major</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>{renderTable(seStudents)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
