import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function ViewFiles() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/pdf/viewFiles");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <div>ViewFiles</div>
  )
}
