import './ContactUsPage.css'

export default function ContactUsPage() {




  return (

    <div className="contact-us-page" >
      <h1 className="contact-us-heading">Contact Us</h1>
      <div className="contact-us-div" >
        <div className="contact-us-left-div" >
          <img className="contact-us-logo" src="https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?t=st=1711725699~exp=1711729299~hmac=3192d6ca1dbcfbb168e492c8082dac001e9b7bd003c313e3f23c6e51892efaf8&w=740" alt="logo" />
          <div className="contact-us-number">
            <h2>+91 1234567890</h2>
            <p>Book online or call us</p>
          </div>
          <div className="contact-us-email" >
            <h2>contact@vibevista.com</h2>
            <p>Send us an email or use contact form <i className="fa-solid fa-arrow-right-long"></i></p>
          </div>
          <div className="contact-us-address" >
            <h1>Our address</h1>
            <p>Kolkata, West Bengal</p>
            <p>India</p>
          </div>
        </div>

        <div className="contact-us-right-div">
          <h1 className="contact-us-right-div-heading" >SEND US A <span className='contact-us-span' >MESSAGE</span></h1>
          <form className="contact-us-form" >
            <div className='form-inputs' >
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Full name" />
            </div>
            
            <div className='form-inputs'>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="name@vibevista.com" />
            </div>

            <div className='form-inputs'>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Let us know your query" />
            </div>

            <div className='form-inputs'>
              <label htmlFor="message">Your message</label>
              <textarea placeholder="Leave a message" id="message" ></textarea>
            </div>

            
            <button className="contact-us-button" >SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}
