import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function ViewVideos() {
    const [data, setData] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/video/viewVideos");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const handleClick = (data) => {
      history.push({
        pathname: "/videoDetail",
        state: data,
      });
    };
  return (
    <div>
      <p style={{textAlign: 'center', marginTop: 10, marginBottom: 10, fontSize: 30}}>Video Lectures</p>
      {data.map((data, i) => (
        <div className="row border m-3">
          <div className="col-3 p-3" style={{borderRight: '1px solid black'}}>
            <div className="">
              Lecture {i+1}
            </div>
          </div>
          <div className="col-8">
            <div className="p-3">
              <p
                onClick={() => {
                  handleClick(data);
                }}
                style={{ cursor: "pointer" }}
              >
                {data.video}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
