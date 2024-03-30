import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {

    // pass the following props in the Home Page to the collection component
    // data = {[events?.data]},
    // emptyTitle = "No Events Found",
    // emptyStateSubtext = "Come back Later"
    // collectionType = "All_Events",
    // limit = {6}
    // page = {1}
    // totalPages = {2}
    // urlParamName

    // Following is on the backend side code to fetch all the events
    // Fetch all the events from backend using the following params
    // 1. query
    // 2. limit = 6,
    // 3. page,
    // 4. category 

    // const conditions = {}
    // const eventsQuery = EventModel.find(conditions)
    //                     .sort({createdAt: 'desc'})
    //                     .skip(0)
    //                     .limit(limit);
    // const events = await populateEvent(eventsQuery);
    // const eventsCount = await EventModel.countDocument(conditions);

    // return {
    //     data : JSON.parse(JSON.stringify(events)),
    //     totalPages: Math.ceil(eventsCount / limit), 
    // }

    // Following is the frontend side of the code
    // const events = await getAllEvents({
    //     query: "",
    //     category: "",
    //     page: 1,
    //     limit: 6,   
    // })

    // console.log(events);

  const { _id, title, image, date, location, seat } = event;

  const dateFormat = new Date(event.startDateTime);
  const options = { weekday: "short", month: "short", day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = dateFormat.toLocaleDateString("en-US", options);

  return (

    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg-md:min-h-[438px]">
        <Link 
            to={`/events/${_id}`} 
            style={{backgroundImage: `url(${event.imageUrl})`}}
            className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" 
        />

        {/* Is Event Creator */}

        <Link
            to={`/events/${_id}`}
            className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
        >
            <div className="flex gap-2">
                <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
                    {event.isFree ? 'FREE' : `${event.price}`}
                </span>
                <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
                    {"Technology"}
                </p>
            </div>

            <p className="p-medium-16 p-medium-18 text-grey-500">
                {formattedDate}
            </p>

            <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
                {event.title}
            </p>

            <div className="flex-between w-full ">
                <p className="p-medium-14 md:p-medium-16 text-grey-600">
                {"Revanth"} {"Amamu"}
                </p>
            </div>
        </Link>
    </div>
  );
};

export default EventCard;
