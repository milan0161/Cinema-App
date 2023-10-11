import { useState } from 'react';
import AdminReservatiosFilter from '../../../common/components/admin/AdminReservatiosFilter';
import AdminUsersList from '../../../common/components/admin/AdminUsersList';
import AdminReservationsList from '../../../features/admin/data/AdminReservationsList';
import AdminProjectionList from '../../../features/admin/data/AdminProjectionList';
import {
  useGetReservationsByEmailQuery,
  useGetReservationsByProjectionQuery,
} from '../../../features/admin/api/adminApi';
import { useAppSelector } from '../../store/store';

const AdminReservationsPage = () => {
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [showProjections, setShowProjections] = useState<boolean>(true);
  const [showUserReservations, setShowUserReservations] =
    useState<boolean>(false);
  const [showProjectionReservations, setShowProjectionReservation] =
    useState<boolean>(false);

  const adminState = useAppSelector((state) => state.admin);

  const { data, isLoading } = useGetReservationsByEmailQuery(
    adminState.userEmail,
    {
      skip: !showUserReservations,
    },
  );

  const { data: reservations, isLoading: isLoadingProjections } =
    useGetReservationsByProjectionQuery(adminState.projectionId, {
      skip: !showProjectionReservations,
    });

  const showUsersHandler = () => {
    setShowUsers(true);
    setShowUserReservations(false);
    setShowProjections(false);
    setShowProjectionReservation(false);
  };
  const showUserReservationsHandler = () => {
    setShowUserReservations(true);
    setShowUsers(false);
    setShowProjections(false);
    setShowProjectionReservation(false);
  };

  const showProjectionsHandler = () => {
    setShowProjections(true);
    setShowUsers(false);
    setShowUserReservations(false);
    setShowProjectionReservation(false);
  };

  const showProjectionReservationsHandler = () => {
    setShowProjectionReservation(true);
    setShowProjections(false);
    setShowUsers(false);
    setShowUserReservations(false);
  };

  return (
    <div className="w-full overflow-auto">
      <div className="flex flex-row justify-end mt-2 mr-2">
        <AdminReservatiosFilter
          isShowProjections={showProjections}
          showProjections={showProjectionsHandler}
          showUsersHandler={showUsersHandler}
        />
      </div>
      <div>
        {showUsers && !showUserReservations && (
          <AdminUsersList showDetails={showUserReservationsHandler} />
        )}

        {showProjections && (
          <AdminProjectionList
            showReservations={showProjectionReservationsHandler}
          />
        )}
        {!showUsers && showUserReservations && (
          <AdminReservationsList loading={isLoading} reservations={data!} />
        )}
        {!showProjections && showProjectionReservations && (
          <AdminReservationsList
            loading={isLoadingProjections}
            reservations={reservations!}
          />
        )}
      </div>
    </div>
  );
};

export default AdminReservationsPage;
