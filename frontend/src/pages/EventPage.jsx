
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import Container from "../components/container/Container";
import EventCard from "../components/EventCard";

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:8080/events", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            // Authorization: `${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const eventData = await response.json();

        console.log(eventData);
        setAllEvents(eventData.events);
        setFilteredEvents(eventData.events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResult = allEvents.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(searchResult);
    setFilteredEvents(searchResult);
  };

  const handleCategoryFilter = (category) => {
    const filteredByCategory = allEvents.filter((event) => event.category.name === category);
    setFilteredEvents(filteredByCategory);
  };

  return (
    <div>
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mt-10 uppercase py-2">
          All Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6">
          <div className="md:col-span-1">
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="flex bg-gray-50 p-5 shadow-md rounded-md"
            >
              <input
                type="text"
                name="search"
                placeholder="Search by name"
                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 text-black"
                onInput={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
              >
                <FaSearch />
              </button>
            </form>

            {/* category */}
            <div className="bg-gray-50 shadow-md rounded-md mt-8">
              <div className="pt-6">
                <span className="bg-primary inline-flex gap-2 items-center text-white text-xl font-bold p-5 rounded-r-xl">
                  <TbCategory2 /> Category
                </span>
              </div>
              <div className="mt-3">
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => setFilteredEvents(allEvents)}
                >
                  All
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Music")}
                >
                  Music
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Sports")}
                >
                  Sports
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Dance")}
                >
                  Dance
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Technology")}
                >
                  Technology
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Business")}
                >
                  Business
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl border-b"
                  onClick={() => handleCategoryFilter("Health")}
                >
                  Health
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-primary-500 hover:text-white text-xl"
                  onClick={() => handleCategoryFilter("Others")}
                >
                  Others
                </button>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentEvents.map((event, index) => (
              <EventCard key={index} event={event}></EventCard>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          <ul className="flex justify-center items-center space-x-2">
            {[...Array(Math.ceil(filteredEvents.length / eventsPerPage))].map((_, index) => (
              <li key={index}>
                <button
                  className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default EventPage;
