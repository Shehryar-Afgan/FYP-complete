import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';

export default function Profile() {
    const auth = useSelector((state) => state.authReducer);
  const { user, isLogged } = auth;
  const [name, setName] = React.useState()
  const [password, setPassword] = React.useState()
  const [image, setImage] = React.useState()


  const submit = async(e) => {
      e.preventDefault();
      try {
          const res = await axios.post('/user/update', {name, id: user._id, password, image});
          console.log(res);
            alert(res.data);
      } catch (error) {
          
      }
  }

  const sendFiles = async (e) => {
    e.preventDefault();
    try {
        const images = e.target.files[0];
        console.log(images)
      let formData = new FormData();
      formData.append("file", images);
      const res = await axios.post(
        "/user/addImage",formData 
      );
      setImage(res.data.result);
      console.log(res);
    } catch (error) {}
  };
  return (
    <div
      style={{ justifyContent: "center", alignItems: "center" }}
      className="container w-50 mt-5"
    >
      <p style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
        Update Profile
      </p>
      <form action="" onSubmit={submit}>
        <div style={{ textAlign: "center" }}>
          <img
            src={
              user.image
                ? user.image
                : "https://res.cloudinary.com/djhdfdrld/image/upload/v1642513634/samples/people/smiling-man.jpg"
            }
            alt=""
            className="img-fluid mb-3"
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </div>
        <input type="file" className="form-control" name="" id="" onChange={sendFiles} />
        <label htmlFor="">Name</label>
        <input
          className="form-control mb-4"
          type="text"
          placeholder={user.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Email</label>
        <input
          className="form-control mb-4"
          type="email"
          placeholder={user.email}
          disabled="true"
        />
        <label htmlFor="">Enter New Password</label>
        <input className="form-control mb-4" type="password" name="" id="" />
        <label htmlFor="">Confirm Password</label>
        <input
          className="form-control mb-4"
          type="password"
          name=""
          id=""
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
