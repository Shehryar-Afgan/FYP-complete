import React from "react";
import axios from "axios";

export default function ViewFile() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("/pdf/viewFiles");
      setData(res.data);
    } catch (error) {}
  };

  const downloadFile = async (fileName) => {
    try {
      window.open(
        `http://localhost:5000/pdf/downloadPdf/${fileName}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", fontSize: 30, margin: 20 }}>Lectures</p>
      {data.map((data, i) => (
        <div className='border p-3 m-3' key={i.toString()}>
          <a
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              downloadFile(data.pdf);
            }}
          >
            Lecture {i + 1}: {data.pdf.slice(0, data.pdf.length - 4)}
          </a>
        </div>
      ))}
    </div>
  );
}
