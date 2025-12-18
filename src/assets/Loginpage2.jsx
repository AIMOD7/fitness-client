import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Swal from 'sweetalert2';
import { addAdmin } from '../service/api.js';


const Loginpage2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    password: '',
    mail: '',
    image: ''
  });

  const nameInputRef = useRef(null); // Renamed for clarity

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const fileData = (e) => {
    setUser({ ...user, image: e.target.files[0] });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('password', user.password);
    formData.append('mail', user.mail);
    if (user.image) formData.append('image', user.image);

    try {
      const res = await addAdmin(formData);
      if (res && res.status === 201) {
        // show success using Swal or your method
        Swal.fire('Success', res.data.message || 'Admin created', 'success');
        // Navigate to admin panel after success
        navigate('/Adminpanel');
      } else {
        // fallback
        Swal.fire('Error', 'Unexpected response from server', 'error');
      }
    } catch (err) {
      console.error('Error while inserting data', err);
      const status = err?.response?.status;
      const serverMsg = err?.response?.data?.message || err.message;
      Swal.fire('Server Error', serverMsg, 'error');
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container-fluid outmost">
        <div className="container outerbox">
          <div className="heading" style={{
            textAlign: "center", marginBottom: "25px", backgroundColor: "rgba(42, 89, 246, 1)",
            padding: "5px", width: "170px", justifySelf: "center", color: "white", borderRadius: "30px", boxShadow: "0px 4px 4px 0px rgba(137, 133, 133, 1)"
          }}>
            <h1><b>Login</b></h1>
          </div>
          
          <p style={{ color: "white" }}><b>Enter USERNAME:</b></p>
          <input 
            type="text" 
            name="name"  // Ensure name matches state key
            placeholder="enter your name" 
            className="inp" 
            onChange={onValueChange} 
            ref={nameInputRef}  // Attach ref here
          />

          <p style={{ color: "white" }}><b>Enter a PASSWORD:</b></p>
          <input 
            type="password" 
            name="password" 
            placeholder="enter password" 
            className="pass" 
            onChange={onValueChange} 
          />

          <p style={{ color: "white" }}><b>Enter a valid EMAIL:</b></p>
          <input 
            type="email" 
            name="mail" 
            placeholder="enter email id" 
            className="email" 
            onChange={onValueChange} 
          />

          <p style={{ color: "white" }}><b>Enter your IMAGE</b></p>
          <input 
            type="file" 
            className="image" 
            accept="image/jpg, image/png, image/jpeg" 
            onChange={fileData} 
          />

          <div className="butt1">
            <button 
              type="button"
              style={{ borderRadius: "15px", backgroundColor: "rgba(107, 140, 250, 1)", width: "16%" }} 
              onClick={submitData}
            >
              Submit
            </button>
            <button 
              type="button"
              style={{ borderRadius: "15px", backgroundColor: "rgba(107, 140, 250, 1)", marginLeft: "350px", width: "10%" }} 
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage2;