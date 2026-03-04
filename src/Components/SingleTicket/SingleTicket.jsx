import { GoDotFill } from "react-icons/go";
import { MdOutlineCalendarToday } from "react-icons/md";
const SingleTicket = ({ ticket, handleCardBtn }) => {
  const getPriorityClass = (priority) => {
    if (priority === "High") {
      return "text-red-500"; // red
    }
    if (priority === "Medium") {
      return "text-yellow-500"; // yellow
    }
    if (priority === "Low") {
      return "text-green-400"; // green
    }
    return "taxt-base";
  };
  return (
    <div
      onClick={() => handleCardBtn(ticket.id)}
      className=" p-4 bg-white text-base-500 rounded-md shadow cursor-pointer space-y-2 hover:bg-gray-50"
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">{ticket?.title}</h3>
        {ticket.status === "inprogress" ? (
          <div className="flex items-center px-2 rounded-md bg-yellow-200">
            <GoDotFill className="text-yellow-600 text-2xl" />
            In Progress
          </div>
        ) : (
          <div className="flex items-center px-2 rounded-md bg-green-200">
            <GoDotFill className="text-green-600 text-2xl" />
            Open
          </div>
        )}
      </div>
      <p>{ticket?.description}</p>
      <div className="flex justify-between gap-2">
        <div className="flex gap-4">
          <p>#{ticket?.id}</p>
          <p className={` font-semibold ${getPriorityClass(ticket.priority)}`}>
            {ticket?.priority}
          </p>
        </div>
        <div className="flex gap-4">
          <p>{ticket?.customer}</p>
          <p className="flex items-center gap-2">
            <MdOutlineCalendarToday />
            {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
