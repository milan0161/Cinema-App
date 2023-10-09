type AdminReservationsFilterProps = {
  showUsersHandler: () => void;
  showProjections: () => void;
  isShowProjections: boolean;
};

const AdminReservatiosFilter = ({
  showUsersHandler,
  showProjections,
  isShowProjections,
}: AdminReservationsFilterProps) => {
  const usersHandler = () => {
    showUsersHandler();
  };

  return (
    <div>
      <button
        onClick={showProjections}
        className={`filter_button ${
          isShowProjections ? 'bg-slate-800' : 'bg-slate-600'
        }`}
        type="button"
      >
        Find By Projection
      </button>
      <button
        onClick={usersHandler}
        className={`filter_button ${
          !isShowProjections ? 'bg-slate-800' : 'bg-slate-600'
        }`}
        type="button"
      >
        Find By Users
      </button>
    </div>
  );
};

export default AdminReservatiosFilter;
