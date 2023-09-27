import React from 'react'
import AdminSidebar from '../../../user/Navbar/AdminSidebar';
import { useHistory} from 'react-router-dom'

export default function LearningDashboard() {
    const history = useHistory();
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{ height: "100vh" }}>
          <AdminSidebar />
        </div>
        <div className="col-9">
          <div style={{ textAlign: "center", marginTop: 20, fontSize: 30 }}>
            <p>Add Learning Material</p>
            <button
              className="btn btn-success"
              onClick={() => {
                history.push("/addFile");
              }}
            >
              Upload File
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => {
                history.push("/addVideo");
              }}
            >
              Upload Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
