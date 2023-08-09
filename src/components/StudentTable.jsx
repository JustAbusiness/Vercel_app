import React, { useState } from 'react';

const inforStudent = [
    {
        id: 1,
        name: "Alice",
        major: "Information Technology",
        GPA: 3.0
    },
    {
        id: 2,
        name: "Bob",
        major: "Software Engineer",
        GPA: 2.7
    },
    {
        id: 3,
        name: "Carol",
        major: "Aviation Research",
        GPA: 2.9
    },
    {
        id: 1,
        name: "Alice",
        major: "Information Technology",
        GPA: 3.2
    },

]

const StudentTable = () => {
    const [infoStudent, setInforStudent]  = useState(inforStudent);
    return (
        <div className="mt-5">
          <div className="row">
          <div class="table-responsive-md">
      <table class="table table-bordered text-center">
        <thead class="table-secondary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Major</th>
            <th scope="col">GPA</th>
          </tr>
        </thead>
        <tbody>
        {infoStudent.map((student, index) => (
            <tr class="" key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.major}</td>
                <td>{student.GPA}</td>
            </tr>
        ))}
         
        </tbody>
      </table>
    </div>
          </div>
        </div>
    );
};

export default StudentTable;