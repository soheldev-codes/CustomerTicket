const DashboarCard = ({ title, count, gradientColor }) => {
  return (
    <div
      className={`card relative overflow-hidden w-full text-white shadow-sm text-center  py-10 ${gradientColor}`}
    >
      {/* Left Image */}
      <img
        src="/vector1.png"
        className="absolute left-0 top-1/2 -translate-y-1/2  opacity-80 "
      />

      {/* Right Image */}
      <img
        src="/vector1.png"
        className="absolute right-0 top-1/2 -translate-y-1/2  opacity-80 scale-x-[-1]"
      />

      <div className="card-body relative z-10">
        <p className="text-2xl">{title}</p>
        <h2 className="text-3xl font-bold">{count}</h2>
      </div>
    </div>
  );
};

export default DashboarCard;
