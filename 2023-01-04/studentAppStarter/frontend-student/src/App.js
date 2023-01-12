import { useEffect, useState } from "react";

import StudentsList from './components/students/StudentsList';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log('first page load, App. useEffect Rendred');
    async function fetchData() {
            const response = await fetch('http://localhost:9000/api');
            const json = await response.json();
            console.log('FetchData Rendred');
            setStudents(json.result);
          }
          fetchData();
        },[])
        
  console.log('first page load, App/ Rendred');
  return (
    <div className="App">
      <h1>Hello World</h1>
      <StudentsList studentData={students}/>
    </div>
  );
}

export default App;
