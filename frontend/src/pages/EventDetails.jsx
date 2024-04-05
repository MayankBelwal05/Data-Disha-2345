import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router-dom";
import loadingAnimation from "../assets/animation/animation.json";
import Container from "../components/container/Container";

const EventDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvent, setFilteredEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(event);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/events/${params.eventId}`
        );
        
        const eventData = await response.json();
        console.log(eventData);
        setEvent(eventData.eventDetails);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchAllEventData = async () => {
      try {
        const response = await fetch(
          "https://dream-craft-server.vercel.app/events"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const allEventData = await response.json();
        setAllEvents(allEventData);
      } catch (error) {
        setError(error);
      }
    };

    fetchEventData();
    fetchAllEventData();
  }, [params.eventId]);

  useEffect(() => {
    const filteredRecentEvent = allEvents.filter(
      (eventItem) => eventItem._id !== params.eventId
    );
    setFilteredEvent(filteredRecentEvent);
  }, [allEvents, params.eventId]);

  if (isLoading) {
    return (
      <Lottie
        className="flex justify-center items-center min-h-[70%]"
        animationData={loadingAnimation}
        width={500}
        height={350}
      />
    );
  }

  if (error) {
    return <p>Error loading events: {error.message}</p>;
  }

  const startDate = new Date(event.startDateTime);
  const endDate = new Date(event.endDateTime);

  const dateOptions = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
  };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

  const startFormattedDate = startDate.toLocaleDateString("en-US", dateOptions);
  const startFormattedTime = startDate.toLocaleTimeString("es-US", timeOptions);

  const endFormattedDate = endDate.toLocaleDateString("en-US", dateOptions);
  const endFormattedTime = endDate.toLocaleTimeString("es-US", timeOptions);

  const backToEventPage = (e) => {
    e.preventDefault();
    navigate('/events');
  }

  const handleBuyTicket = (e) => {
    e.preventDefault();
    navigate('/payment')
  }

  return (
    <Container>
      <i style={{color: "black", position: "absolute", left: "10px"}} onClick={e => backToEventPage(e)} className="fa-solid fa-arrow-left-long back-arrow"></i>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <img
            className="h-full min-h-[300px] object-cover object-center mx-3 "
            // style={{marginTop: }}
            src={event.imageUrl}
            alt="hero image"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `${event.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {"Technology"}
                  </p>
                </div>
                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500">
                    {"Revanth"} {"Amamu"}
                  </span>
                </p>
              </div>
            </div>

            <button onClick={e => handleBuyTicket(e)} className="bg-primary-500 text-green-50 rounded-full h-[54px] w-[120px] p-regular-16 hover:bg-primary-60">
              Buy Ticket
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md-gap-3">
                <img
                  className="w-[32px] h-[32px]"
                  src="/icons/calendar.svg"
                  alt="calendar"
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {startFormattedDate} - {startFormattedTime}
                  </p>
                  <p>
                    {endFormattedDate} - {endFormattedTime}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <img
                  className="w-[32px] h-[32px]"
                  src="/icons/location.svg"
                  alt="location"
                />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What you will learn:</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default EventDetails;
