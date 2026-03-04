import React from "react";
import SingleTicket from "../SingleTicket/SingleTicket";

const MainSection = ({
  tickets,
  inProgressTickets,
  resolvedTickets,
  handleCardBtn,
  handleComplete,
}) => {
  console.log(resolvedTickets);
  return (
    <div className="container  mx-auto mt-10 gap-5">
      <h2 className="text-2xl font-semibold py-4">Customer Tickets</h2>
      <div
        className="grid grid-cols-1
       md:grid-cols-12 md:space-x-4"
      >
        <div className="  col-span-9 rounded ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <SingleTicket
                handleCardBtn={handleCardBtn}
                key={ticket.id}
                ticket={ticket}
              />
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="  space-y-4 p-4 col-span-3 rounded">
          <div>
            <h2 className="text-2xl mb-2 font-semibold">Task Status</h2>
            <div>
              {inProgressTickets.length ? (
                <div>
                  {inProgressTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="card p-2 mb-2 space-y-2 shadow bg-white"
                    >
                      <p>{ticket.title}</p>
                      <p>{ticket.customer}</p>
                      <button
                        className="btn bg-green-500 text-white font-semibold"
                        onClick={() => handleComplete(ticket.id)}
                      >
                        Complete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Select a ticket to add to Task Status</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-2 font-semibold">Resolved Task</h2>

            <div>
              {resolvedTickets.length ? (
                <div className="space-y-2">
                  {resolvedTickets.map((ticket) => (
                    <p
                      className="bg-blue-100 p-2 rounded font-semibold "
                      key={ticket.id}
                    >
                      {ticket.title}
                    </p>
                  ))}
                </div>
              ) : (
                <p>No resolved tasks yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
