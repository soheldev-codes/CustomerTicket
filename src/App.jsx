import { useState } from "react";
import "./App.css";
import Dashbord from "./Components/Dashbord/Dashbord";
import MainSection from "./Components/MainSection/MainSection";
import NavMenu from "./Components/NavMenu/NavMenu";

import { tickets } from "./Data/Data";
import { toast } from "react-toastify";

function App() {
  const [allTickets, setAllTickets] = useState([...tickets]);

  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Card click
  const handleCardBtn = (ticketId) => {
    const remaining = allTickets.find((ticket) => ticket.id === ticketId);
    const updateStatus = { ...remaining, status: "inprogress" };
    setInProgressTickets([...inProgressTickets, updateStatus]);

    toast.success("Succefully Added PrgressBar!");

    // const ticket = allTickets.find((t) => t.id === ticketId);
    // if (ticket)
    //   setInProgressTickets((prev) => [
    //     ...prev,
    //     { ...ticket, status: "inprogress" },
    //   ]);
  };

  // Complete button click
  const handleComplete = (ticketId) => {
    // Remove from inProgress
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticketId));
    // Add to resolved
    const remaining = allTickets.find((ticket) => ticket.id === ticketId);
    const updateStatus = { ...remaining, status: "inprogress" };
    setResolvedTickets([...resolvedTickets, updateStatus]);
    // Remove from allTickets
    setAllTickets((prev) => prev.filter((t) => t.id !== ticketId));

    toast.success("Complete Task");
  };

  return (
    <div className="bg-base-200">
      <NavMenu />
      <Dashbord
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
      />
      <MainSection
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
        handleCardBtn={handleCardBtn}
        handleComplete={handleComplete}
        tickets={allTickets}
      />
    </div>
  );
}

export default App;
