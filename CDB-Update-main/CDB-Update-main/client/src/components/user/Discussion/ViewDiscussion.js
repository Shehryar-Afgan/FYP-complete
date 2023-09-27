import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function ViewDiscussion() {
    const [data, setData] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/discussion/viewQuery");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const handleClick = (data) => {
      history.push({
        pathname: "/discussionDetail",
        state: data,
      });
    };
  return (
    <div>
      {data.map((item) => (
        <div className="border p-3 m-3">
          <p>{item.query}</p>
          {item.response.map((item, i) => (
            <p>
              Answer {i + 1}: {item}
            </p>
          ))}
          <button
            className="btn btn-success"
            onClick={() => {
              handleClick(item);
            }}
          >
            Give Response
          </button>
        </div>
      ))}
    </div>
  );
}
