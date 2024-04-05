import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import BookingPage from '../pages/BookingPage'
import NotFoundPage from '../pages/NotFoundPage'
import UserProfile from '../pages/UserProfile'
import PaymentPage from '../pages/PaymentPage'
import AboutUsPage from '../pages/AboutUsPage'
import ContactUsPage from '../pages/ContactUsPage'
import CustomBookingForm from '../pages/CustomBookingForm'
import Login from '../pages/LoginPage'
import Signup from '../pages/SignupPage'
import EventDetails from '../pages/EventDetails'
import CreateEventForm from '../pages/CreateEventForm'
import EventPage from '../pages/EventPage'

export default function AllRoutes() {

  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<LandingPage/>} /> */}
            <Route path='/' element={<HomePage/>} />
            <Route path='/booking' element={<BookingPage/>} />
            <Route path='/events' element={<EventPage/>} />
            <Route path='/createEvent' element={<CreateEventForm/>}/>
            <Route path="/events/:eventId" element={<EventDetails/>} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='/contact' element={<ContactUsPage/>} />
            <Route path='/customBooking' element={<CustomBookingForm/>} />
            <Route path='/profile' element={<UserProfile/>} />
            <Route path='/payment' element={<PaymentPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Signup/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </div>
  )
}
