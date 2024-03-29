import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import BookingPage from '../pages/BookingPage'
import EventPage from '../pages/EventPage'
import NotFoundPage from '../pages/NotFoundPage'
import UserProfile from '../pages/UserProfile'
import PaymentPage from '../pages/PaymentPage'
import LoginSignUp from '../pages/LoginSignUp'
import AboutUsPage from '../pages/AboutUsPage'
import ContactUsPage from '../pages/ContactUsPage'
import CustomBookingForm from '../pages/CustomBookingForm'

export default function AllRoutes() {



  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/booking' element={<BookingPage/>} />
            <Route path='/event' element={<EventPage/>} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='/contact' element={<ContactUsPage/>} />
            <Route path='/customBooking' element={<CustomBookingForm/>} />
            <Route path='/profile' element={<UserProfile/>} />
            <Route path='/payment' element={<PaymentPage/>} />
            <Route path='/register' element={<LoginSignUp/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </div>
  )
}
