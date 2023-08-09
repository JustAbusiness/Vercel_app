import StudentList from "./StudentList";
import './App.css'

const students = [
  {id: 1, name: 'Alice', major:'IT', GPA: 3.2},
  {id: 2, name: 'Bob', major: "SE",  GPA: 2.4},
  {id: 3, name: 'Carol', major: "SE",  GPA: 2.8},
  {id: 4 , name: 'David', major: "IT",  GPA: 3.8},
  {id: 5, name: 'Pham', major: "SE",  GPA: 3.0}
];
function App3() {
 

  return (
    <div className="App">
        <StudentList students={students} ></StudentList>
    </div>
  );
}

export default App3;