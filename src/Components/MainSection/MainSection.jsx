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
    <div className="container mx-auto mt-10 gap-5">
      <h2 className="text-2xl font-semibold py-4">Customer Tickets</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="  col-span-8 rounded ">
          <div className="grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <SingleTicket
                handleCardBtn={handleCardBtn}
                key={ticket.id}
                ticket={ticket}
              />
            ))}
          </div>
        </div>
        <div className="shadow  col-span-4 rounded">
          <div>
            <h2>Task Status</h2>
            <p>Select a ticket to add to Task Status</p>

            <div>
              {inProgressTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="card p-4 mb-2 shadow bg-green-100"
                >
                  <p>{ticket.title}</p>
                  <p>{ticket.customer}</p>
                  <button
                    className="btn"
                    onClick={() => handleComplete(ticket.id)}
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Resolved Task</h2>
            <p>No resolved tasks yet.</p>
            {resolvedTickets.length}
            <div>
              {resolvedTickets.map((ticket) => (
                <p key={ticket.id}>{ticket.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
