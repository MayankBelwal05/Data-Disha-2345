import './UserProfile.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const backToHome = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  const handleLogout = (e) => {
    e.preventDefault();
    
    axios.get(`http://localhost:8080/users/logout`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response)
      localStorage.removeItem('token')
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="user-profile" >
      <i onClick={e => backToHome(e)} className="fa-solid fa-arrow-left-long back-arrow"></i>
      <div className='user-profile-top-section'>
          <img className='user-profile-img' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1711812417~exp=1711816017~hmac=e12bea91b994155f51522fdfe2596923d8571b60964a08af57db536245227ff4&w=740" alt="profile photo" />
        {/* <div>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <p>Your age: {user.age}</p>
          <p>You belong to: {user.city}</p>
          <p>You are a: {user.role}</p>
          <p>Your interest: {user.interests}</p>
        </div> */}

        <div className='user-profile-user-details' >
          <h2>Rantu Bangal</h2>
          <p><span className='profile-span'>Email:</span> rantubangal996@gmail.com</p>
          <p><span className='profile-span'>Your age:</span> 26</p>
          <p><span className='profile-span'>You belong to:</span> Kolkata</p>
          <p><span className='profile-span'>You are a:</span> Organizer</p>
          <p><span className='profile-span'>Your interest:</span> Photography</p>
          <button className='logout-btn' onClick={e => handleLogout(e)} >Logout</button>
        </div>
      </div>
      <div></div>
    </div>
  )
}



// _id
// 6605b679bf0254b32b3eb595
// username
// "smith"
// email
// "smith@gmail.com"
// password
// "$2b$05$uZXPYVWBypTPy1N1476Vre7QWZO6NE6vqgZNkoFg5hsCVrKHXOtgK"
// age
// 24
// city
// "Pune"
// role
// "organizer"
// interests
// "Versatile"