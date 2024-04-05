
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
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
        style={{
          backgroundImage: `url(${
            event.imageUrl
              ? event.imageUrl
              : "https://img.freepik.com/free-vector/flat-design-business-party-illustration_23-2149481435.jpg?w=900"
          })`,
        }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      <Link
        to={`/events/${event._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {event.isFree ? (
              "FREE"
            ) : (
              <>
                {event.price}
              </>
            )}
          </span>

          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
            {event.category.name ? event.category.name : "Other"}
          </p>
        </div>

        <p className="p-medium-16 p-medium-18 text-grey-500">{formattedDate}</p>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p>

        <div className="flex-between w-full ">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.username}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
