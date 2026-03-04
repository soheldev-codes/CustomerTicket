import DashboarCard from "../DashbordCard/DashboarCard";

const Dashbord = () => {
  return (
    <div className="container mx-auto 5-5">
      <div className="flex justify-center mt-5 gap-5">
        <DashboarCard
          gradientColor="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
          title="In-Progress"
          count="0"
        />
        <DashboarCard
          gradientColor="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
          title="Resolved"
          count="0"
        />
      </div>
    </div>
  );
};

export default Dashbord;
