import './BookingPage.css'

export default function BookingPage() {


    




    return (
        <div>
            <h1 className='services-heading' >OUR <span className='services-span'>SERVICES</span></h1>

            {/* Heading Booking Images Sections */}
            <div className='booking-heading-section' >
                <div className='booking-heading-section-div' >
                    <img className="booking-image" src="https://img.freepik.com/free-photo/front-view-smiley-couple-wedding_23-2149956435.jpg?t=st=1711638425~exp=1711642025~hmac=ec998be69887b59ca5a9676bfbb9710f5a12122533edab48725574ab7ebc8366&w=996" alt="Wedding Image" />
                    <div className='booking-content' >
                        <div className='booking-content-first-row' >
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-calendar-days services-span"></i>
                                <p>Book Your Date</p>
                            </div>
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-location-dot services-span"></i>
                                <p>In Your Location</p>
                            </div>
                        </div>
                        <h3>Plan Your Special Day With Us</h3>
                        <p>Create unforgettable memories with your loved ones. Give us a chance and enjoy your dates to the fullest.</p>
                        <button className='booking-button' >Order for Wedding Events</button>
                    </div>
                </div>

                <div className='booking-heading-section-div' >
                    <img className="booking-image" src="https://img.freepik.com/free-photo/multiethnic-friends-holding-balloons_23-2147651919.jpg?t=st=1711638472~exp=1711642072~hmac=187dc02dcf8a890da52daaee1bc4229dd041bba0cf73dd1621d446d0b05ba9e3&w=996" alt="Birthday Image" />
                    <div className='booking-content' >
                        <div className='booking-content-first-row' >
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-calendar-days services-span"></i>
                                <p>Book Your Date</p>
                            </div>
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-location-dot services-span"></i>
                                <p>In Your Location</p>
                            </div>
                        </div>
                        <h3>Plan Your Special Day With Us</h3>
                        <p>Create unforgettable memories with your loved ones. Give us a chance and enjoy your dates to the fullest.</p>
                        <button className='booking-button' >Order for Birthday Events</button>
                    </div>
                </div>
            </div>


            {/* Pakages Section */}
            <div className='packages-section-with-heading'>
                <h1 className='packages-section-heading' >OUR <span className='services-span'>PACKAGES</span></h1>
                <div className='packages-section' >
                    <div className='packages-section-card' >
                        <div className='packages-section-card-heading' >
                            <h3>For Birthdays</h3>
                        </div>
                        <div className='packages-section-card-content' >
                            <h1>&#x24;249.99</h1>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Full Services</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Decorations</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Music and Photos</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Food and Drinks</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Invitation Card</p>
                            <button className='booking-button book-now-button' >Book Now</button>
                        </div>
                    </div>

                    <div className='packages-section-card' >
                        <div className='packages-section-card-heading' >
                            <h3>For Weddings</h3>
                        </div>
                        <div className='packages-section-card-content' >
                            <h1>&#x24;899.99</h1>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Full Services</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Decorations</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Music and Photos</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Food and Drinks</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Invitation Card</p>
                            <button className='booking-button book-now-button' >Book Now</button>
                        </div>
                    </div>

                    <div className='packages-section-card' >
                        <div className='packages-section-card-heading' >
                            <h3>For Concerts</h3>
                        </div>
                        <div className='packages-section-card-content' >
                            <h1>&#x24;999.49</h1>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Full Services</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Decorations</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Music and Photos</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Food and Drinks</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Invitation Card</p>
                            <button className='booking-button book-now-button' >Book Now</button>
                        </div>
                    </div>

                    <div className='packages-section-card' >
                        <div className='packages-section-card-heading' >
                            <h3>For Others</h3>
                        </div>
                        <div className='packages-section-card-content' >
                            <h1>&#x24;749.99</h1>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Full Services</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Decorations</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Music and Photos</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Food and Drinks</p>
                            <p><span><i style={{ color: "#29B6F6", fontSize: "20px", fontWeight: "bolder", marginRight: "8px" }} className="fa-solid fa-check"></i></span>Invitation Card</p>
                            <button className='booking-button book-now-button' >Book Now</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* Custom Packages Booking */}
            <div className='custom-booking-section' >
                <h1>CREATE YOUR <span className='services-span'>CUSTOM PAKAGE</span></h1>
                <div className='custom-booking-card' >
                    <img className="custom-booking-image" src="https://img.freepik.com/free-photo/black-white-people-party-together_23-2147651899.jpg?t=st=1711642837~exp=1711646437~hmac=05471d3d9ce271ae03a9b6cc18aa9f2bba7a619aa01c2a059ac429d8b28fd7fa&w=996" alt="Custom Booking Image" />
                    <div className='custom-booking-content' >
                        <div className='booking-content-first-row' >
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-calendar-days services-span"></i>
                                <p>Book Your Date</p>
                            </div>
                            <div className='booking-content-first-row-div' >
                                <i className="fa-solid fa-location-dot services-span"></i>
                                <p>In Your Location</p>
                            </div>
                        </div>
                        <h3>Plan Your Special Day With Us</h3>
                        <p>Create unforgettable memories with your loved ones. Give us a chance and enjoy your dates to the fullest.</p>
                        <button className='booking-button' >Create Your Custom Event</button>
                    </div>
                </div>
            </div>



        </div>

    )
}
