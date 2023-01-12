import React, {useState} from'react';


const StudentsList = ({studentData}) => {
    console.log('<StudentsList /> Rendered');

    return (
        <div className='StudentList'>
            {studentData.map((student) => {
                const {firstName, lastName, id, pic, skill, city, company, email, grades} = student;
                const avg = grades.reduce((a,b) => a + parseFloat(b),0)/grades.length;
                
                return (
                    <div key={id} className='Student'>
                        <img src={pic} alt={firstName +'' + lastName} />
                        <h2>{firstName} {lastName}</h2>
                        <p>Email: {email}</p>
                        <p>Compnay: {company}</p>
                        <p>Skill: {skill}</p>
                        {/* <p>{city}</p> */}
                        <p>Averages: {avg}%</p>
                        {/* <p>{grades}</p> */}

                    </div>
                )           
            })}
        </div>
    )

}

export default StudentsList;

