import { useEffect, useState } from "react";
import Container from "./components/Container/Container";

import StudentsList from './components/Students/StudentsList';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('first page load, App. useEffect Rendred');
    async function fetchData() {
            const response = await fetch('http://localhost:9000/api');
            const json = await response.json();
            console.log('FetchData Rendred');
            if(response.status === 200) {
              setStudents(json.result);
              setLoading(false)
            }else {
              setError(json.message);
              setLoading(false)
            }
          }
          fetchData();
        },[])
    const fetchContent=()=>{
      if(loading) { return <Loading />; }
      else if(error) { return <Error error={error} />; }
      else { return <StudentsList studentData={students} />; }
    }
  console.log('first page load, App/ Rendred');
  return (
    <div className="App">
      <Container>
      {fetchContent()}
      </Container>
    </div>
  );
}

export default App;
