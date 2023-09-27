import React from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom';
import Sidebar from '../../../user/Navbar/Sidebar';

export default function ViewTest() {
    const [data, setData] = React.useState([]);
    const location = useLocation();
  const university = location.state;
  console.log(university);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.post("/test/findTest", {university});
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <div className="">
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <p className="text-center" style={{ fontSize: 30, fontWeight: "bold" }}>
        Mock Test
      </p>
      <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
        {data.map((data, i) => (
          <div className="border col-5 mb-3 p-3" style={{marginLeft: 20}}>
            <p>
              Question # {i + 1}: {data.question}?
            </p>
            <p style={{ cursor: "pointer" }}>A: {data.A}</p>
            <p style={{ cursor: "pointer" }}>B: {data.B}</p>
            <p style={{ cursor: "pointer" }}>C: {data.C}</p>
            <p style={{ cursor: "pointer" }}>D: {data.D}</p>
            <p style={{fontWeight: 'bold'}}>Correct Option: {data.correctOption}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}
