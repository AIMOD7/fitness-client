import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Swal from 'sweetalert2';
import { addUser } from "../service/api.js";


const Loginpage1 = () => {
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

    if (!user.name) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Your Name!',
      });
      nameInputRef.current.focus(); // Focus on the name input
      return;
    } 
    else if (!user.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Password!',
      });
      return;
    } 
    else if (user.password.length !== 7) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be 7 characters!',
      });
      return;
    }
    else if (!user.mail) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Email!',
      });
      return;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.mail)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Enter a valid email!',
      });
      return;
    }
    else if (!user.image) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Upload Image!',
      });
      return;
    } 
    else {
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('password', user.password);
      formData.append('mail', user.mail);
      formData.append('image', user.image, user.image.name);
      
      try {
        const res = await addUser(formData);
        if (res.status === 201) {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success"
          });
          setTimeout(() => {
            navigate('/Home');
          }, 2000);
        }
        else if (res.status === 409) { // existing user
          Swal.fire({
            title: "Welcome Back!",
            text: "Redirecting to Home...",
            icon: "success"
          });
          setTimeout(() => navigate('/Home'), 2000);
        }
        else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } catch (error) {
        console.log("Error while inserting data", error);
        if (error.response && error.response.status === 500) {
          Swal.fire({
            title: "Welcome Back!",
            text: "Redirecting to Home...",
            icon: "success"
          });
          setTimeout(() => navigate('/Home'), 2000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "Unable to connect to the server.",
          });
        }
      }
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

export default Loginpage1;