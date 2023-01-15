import React,{useState,useEffect} from 'react'


export default function StudentsGrades({id}) {
    console.log("gradeslist rendered")
    const [grade, setGrades] = useState([]);
 
  useEffect(() => {
    console.log('first page load, App. useEffect Rendred');
    async function fetchData() {
            const response = await fetch(`http://localhost:9000/api/${id}/grades`);
            const json = await response.json();
            console.log('FetchData Rendred');
            setGrades(json.result);
          }
          fetchData();
        },[])
        console.log(grade)
  return (
    <div>
        {/* <p>grades for {id}</p> */}
        {/* {gradesList.map((el) => (
            <div key={el.id}>
                <p>Test {gradesList.indexOf(el)+1}: {el}</p>
            </div>))
        } */}
       
    </div>

  )
}
