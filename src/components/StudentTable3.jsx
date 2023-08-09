import React, { useState } from 'react';
import  DynamicStudentTable from './DynamicStudentTable';
import AddCouseForm from './AddCouseForm';

const courses = [
    {name: "Full Stack Development", score: 2 },
    {name: "Algorithms", score: 3 },
    {name: "Database Application", score: 4 },

]
const StudentTable3 = () => {
    const [acitiveCourses, setActiveCourses ] = useState(courses);
    const [courseName, setCousesName] = useState([]);
    const [courseScore, setCousesScore] = useState(0);

    function handleAdd() {
        setCousesName([...acitiveCourses, {name: courseName, score: parseFloat(courseScore)}])
    }

    function handleDelete(courseName) {
        setCousesName(acitiveCourses.filter(course => course.name !== courseName))
        setActiveCourses('')
    }

    function handleNameChange(newName) {
        setCousesName(newName)
    }

    function handleScoreChange(newScore) {
        setCousesScore(newScore)
    }
    
    return (

        <div>
            <DynamicStudentTable acitiveCourses={acitiveCourses} onDelete={handleDelete}></DynamicStudentTable>
            <AddCouseForm

                onAdd={handleAdd}
                courseName={courseName}
                courseScore={courseScore}
                onNameChange={handleNameChange}
                onScoreChange={handleScoreChange}
            >

            </AddCouseForm>
        </div>
    );
};

export default StudentTable3;