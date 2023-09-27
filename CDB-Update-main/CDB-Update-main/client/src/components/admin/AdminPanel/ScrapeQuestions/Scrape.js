import React from 'react'
import axios from "axios";
import AdminSidebar from '../../../user/Navbar/AdminSidebar'
import toast, { Toaster } from 'react-hot-toast';
const Scrape = () => {
    const [data, setData] = React.useState([]);


  const getData = async () => {
    try {
      const res = await axios.get("/viewquestion");
      setData(res.data);
      console.log(res.data)
    } catch (error) {console.log(error)}
  };
  const addData = async () => {
    try {
      const res = await axios.get("/question");
      toast.success('Successfully Added Questions to Dashboard');
    } catch (error) {console.log(error)}
  };
  return (
    <div>
    <Toaster />
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <AdminSidebar />
        </div>
        <div className="col-9 mt-3">
            <button
            className='btn btn-success'
            type='submit'
            onClick={()=>getData()}
            >
            Scrape Questions
            </button>
            <br/>
            <button
            className='btn btn-success mt-3'
            type='submit'
            onClick={()=>addData()}
            >
            Add Questions to Database
            </button>
            <div className="row mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                {data.map((data, i) => (
                <div className="border col-5 mb-3 p-3" style={{marginLeft: 20}}>
                    <p>
                    Question # {i + 1}: {data.question}
                    </p>
                    {
                      data.options.map((option, idx) => {
                        return <p style={{ cursor: "pointer" }}>{idx}: {option}</p>
                      })
                    }
                    <p style={{fontWeight: 'bold'}}>Correct Option: {data.correct_answer}</p>
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Scrape