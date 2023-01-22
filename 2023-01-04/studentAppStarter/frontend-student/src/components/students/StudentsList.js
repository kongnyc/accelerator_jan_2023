import React,{useState} from 'react';
import StudentsGrades from "./StudentsGrades"
import './StudentList.css';

const StudentsList = ({studentData}) => {
    console.log('<StudentsList /> Rendered');
    const [show, setShow] = useState({show:false});
    return (
        <div className='StudentList'>
            {studentData.map((student) => {
                const {firstName, lastName, id, pic, skill, company, email, grades} = student;
                const avg = (grades.reduce((a,b) => a + parseFloat(b),0)/grades.length).toFixed(2);;
                  
                return (
                    <div key={id} className='StudentCard'>
                        <div className='StudentCard__avatar'>
                        <img src={pic} alt={firstName +'' + lastName} />
                        </div>
                        <div className='StudentCard__info'>
                        <h2>{firstName} {lastName}</h2>
                        <ul>
                        <li>Email: {email}</li>
                        <li>Compnay: {company}</li>
                        <li>Skill: {skill}</li>
                        <li>Averages: {avg}%</li>
                        </ul>
                        </div>
                        {/* <button onClick={() => setShow(!show)} > */}
                        {/* {this.show ? '+' : '-'} */}
                        {/* {show && <StudentsGrades id={id}/>} */}
                        {/* {show && <StudentsGrades gradesList={grades} id={id}/>} */}
                         {/* <StudentsGrades gradesList={grades} id={id}/> */}
                        {/* </button>     */}
                        {/* {{state} ? <StudentsGrades gradesList={grades} id={id}/>:null} */}
                    </div>
                )           
            })}
        </div>
    )

}

export default StudentsList;

