import { useGetUsersListQuery } from '../../../features/admin/api/adminApi';
import LoadingIndicator from '../ui/LoadingIndicator';
import AdminSingleUser from './AdminSingleUser';

type AdminUsersListProps = {
  showDetails: () => void;
};

const AdminUsersList = ({ showDetails }: AdminUsersListProps) => {
  const { data, isLoading } = useGetUsersListQuery();
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <ul className="w-full p-2 flex flex-col flex-wrap mt-5">
      {data?.map((x) => {
        return <AdminSingleUser showDetails={showDetails} key={x} email={x} />;
      })}
    </ul>
  );
};

export default AdminUsersList;
