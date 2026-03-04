import React from "react";
import SingleTicket from "../SingleTicket/SingleTicket";

const MainSection = ({ tickets }) => {
  console.log(tickets);
  return (
    <div className="container mx-auto mt-10 gap-5">
      <h2 className="text-2xl font-semibold py-4">Customer Tickets</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="  col-span-8 rounded ">
          <div className="grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <SingleTicket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
        <div className="bg-red-100  col-span-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default MainSection;
