import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const backToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8080/users/logout`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-profile">
      <div className="user-details">
        <i
          onClick={(e) => backToHome(e)}
          className="fa-solid fa-arrow-left-long back-arrow"
        ></i>
        <div className="user-profile-top-section">
          <img
            className="user-profile-img"
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1711812417~exp=1711816017~hmac=e12bea91b994155f51522fdfe2596923d8571b60964a08af57db536245227ff4&w=740"
            alt="profile photo"
          />
        

          <div className="user-profile-user-details">
            <h2>{user.username}</h2>
            <p>
              <span className="profile-span">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="profile-span">Your age:</span> {user.age} years
            </p>
            <p>
              <span className="profile-span">You belong to:</span> {user.city}
            </p>
            <p>
              <span className="profile-span">You are a:</span> {user.role}
            </p>
            {/* <p>
              <span className="profile-span">Your interest:</span> 
            </p> */}
            <button className="logout-btn" onClick={(e) => handleLogout(e)}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
