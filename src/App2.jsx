
import StudentTable from "./StudentTable";

function App2() {
  const students = [
    {id: 1, name: 'Alice', major:'IT', GPA: 3.2},
    {id: 2, name: 'Bob', major: "SE",  GPA: 2.4},
    {id: 3, name: 'Carol', major: "SE",  GPA: 2.8},
    {id: 4 , name: 'David', major: "IT",  GPA: 3.8},
    {id: 5, name: 'Pham', major: "IT",  GPA: 3.0}
  ];

  return (
    <div className="App">
      <StudentTable students={students}></StudentTable>
    </div>
  );
}

export default App2;