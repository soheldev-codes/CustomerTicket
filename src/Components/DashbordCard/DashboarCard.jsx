const DashboarCard = ({ title, count }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <p>{title}</p>
        <h2 className="card-title">{count}</h2>
      </div>
    </div>
  );
};

export default DashboarCard;
