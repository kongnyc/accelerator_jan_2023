import React,{useState} from 'react';
import StudentsGrades from "./StudentsGrades";

const StudentsList = ({studentData}) => {
    console.log('<StudentsList /> Rendered');
    // const [show, setShow] = useState({show:false});
    return (
        <div className='StudentList'>
            {studentData.map((student) => {
                const {firstName, lastName, id, pic, skill, company, email, grades} = student;
                const avg = (grades.reduce((a,b) => a + parseFloat(b),0)/grades.length).toFixed(2);;
                  
                return (
                    <div key={id} className='Student'>
                        <img src={pic} alt={firstName +'' + lastName} />
                        <h2>{firstName} {lastName}</h2>
                        <p>Email: {email}</p>
                        <p>Compnay: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Averages: {avg}%</p>
                        {/* <button onClick={() => setShow(!show)} >
                        {show ? '+' : '-'}
                        </button>     */}
                        {/* {show && <StudentsGrades id={id}/>} */}
                        {/* {show && <StudentsGrades gradesList={grades} id={id}/>} */}
                        {/* {{state} ? <StudentsGrades gradesList={grades} id={id}/>:null} */}
                         {/* <StudentsGrades gradesList={grades} id={id}/> */}
                    </div>
                )           
            })}
        </div>
    )

}

export default StudentsList;

