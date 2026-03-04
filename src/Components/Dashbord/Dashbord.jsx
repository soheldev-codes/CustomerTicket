import DashboarCard from "../DashbordCard/DashboarCard";

const Dashbord = ({ inProgressTickets, resolvedTickets }) => {
  return (
    <div className="container mx-auto 5-5">
      <div className="flex flex-col md:flex-row justify-center mt-5 gap-5">
        <DashboarCard
          gradientColor="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
          title="In-Progress"
          count={inProgressTickets.length}
        />
        <DashboarCard
          gradientColor="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
          title="Resolved"
          count={resolvedTickets.length}
        />
      </div>
    </div>
  );
};

export default Dashbord;
