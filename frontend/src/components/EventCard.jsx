import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EventCard = ({ event }) => {
  //   category: "660e41b53076ff913eeedc92";
  //   createdAt: "2024-04-04T17:11:39.936Z";
  //   description: "I am passing from the frontend with category ";
  //   endDateTime: "2024-04-06T17:11:00.000Z";
  //   imageUrl: "blob:http://localhost:5173/39f780d2-4127-4548-baeb-d620905a2e78";
  //   isFree: false;
  //   location: "Online";
  //   organizer: "660e6a55075f97af1fb5c1de";
  //   price: "500";
  //   startDateTime: "2024-04-05T17:11:00.000Z";
  //   title: "Hi my name is revanth";
  //   url: "www.revanth.com";
  //   _id: "660edf4b61948d280430632c";

  const [organizerName, setOrganizerName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchOrganizerName = async () => {
      try {
        const response = await axios.get(`/users/${event.organizer}`);
        console.log(response.data);
        setOrganizerName(response.data.username);
      } catch (error) {
        console.error("Error fetching organizer name:", error);
      }
    };

    fetchOrganizerName();

    const fetchCategoryName = async () => {
        try {
          const response = await axios.get(`/categories/${event.category}`);
          setCategoryName(response.data.name);
        } catch (error) {
          console.error("Error fetching category name:", error);
        }
      };
  
      fetchCategoryName();
  }, [event.category, event.organizer]);


  const dateFormat = new Date(event.startDateTime);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = dateFormat.toLocaleDateString("en-US", options);

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg-md:min-h-[438px]">
      <Link
        to={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      <Link
        to={`/events/${event._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {event.isFree
              ? "FREE"
              : <img src="icons/rupee.svg" alt="rupee" /> + `${event.price}`}
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
            {categoryName}
          </p>
        </div>

        <p className="p-medium-16 p-medium-18 text-grey-500">{formattedDate}</p>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p>

        <div className="flex-between w-full ">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {organizerName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
