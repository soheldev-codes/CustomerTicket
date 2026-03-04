const SingleTicket = ({ ticket }) => {
  console.log(ticket);
  return (
    <div className=" p-4 shadow cursor-pointer">
      <h3 className="font-bold">{ticket?.title}</h3>
      <p>{ticket?.description}</p>
      <p>Customer: {ticket?.customer}</p>
      <p>Priority: {ticket?.priority}</p>
      <p>Status: {ticket?.status}</p>
      <p>Created At: {new Date(ticket.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default SingleTicket;
