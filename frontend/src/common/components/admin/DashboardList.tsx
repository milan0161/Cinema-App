import { useGetDashboardInfoQuery } from '../../../features/admin/api/adminApi';
import LoadingIndicator from '../ui/LoadingIndicator';
import DashBoardItem from './DashbordItem';

const DashboardList = () => {
  const { data, isLoading } = useGetDashboardInfoQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <ul className="flex w-full items-center">
      <DashBoardItem title="Projections" data={data?.projectionsCount!} />
      <DashBoardItem title="Ticket sold" data={data?.ticketSold!} />
      <DashBoardItem title="Income" data={`$${data?.income}`} />
      <DashBoardItem title="Active Movies" data={data?.movieCount!} />
    </ul>
  );
};

export default DashboardList;
