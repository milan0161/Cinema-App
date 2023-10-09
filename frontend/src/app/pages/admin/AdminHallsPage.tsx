import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { useGetHallsQuery } from '../../../features/hall/api/hallApi';
import Hall from '../../../features/hall/data/Hall';

const AdminHallsPage = () => {
  const { data, isLoading, isError, error } = useGetHallsQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="w-full h-full flex justify-between gap-x-2 p-10">
      {data?.map((hall) => {
        return <Hall key={hall.name} hall={hall} />;
      })}
    </div>
  );
};

export default AdminHallsPage;
