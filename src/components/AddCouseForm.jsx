import React from 'react';

const AddCouseForm = ({
    onAdd,
    courseName,
    courseScore,
    onNameChange,
    onScoreChange,
}) => {
    return (
        <div>
           <div>
                <label for="courseName">CourseNmae</label>
                <input type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => onNameChange(e.target.value)} />
           </div>
            <div>
                <label for="courseScode"> Couse Score</label>
                <input type="text"
                id="courseName"
                value={courseScore}
                onChange={(e) => onScoreChange(e.target.value)} />
            </div>

            <div>
                <button onClick={onAdd}>Add</button>
            </div>
        </div>
    );
};

export default AddCouseForm;