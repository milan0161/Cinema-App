import ErrorBlock from '../../../common/components/ui/ErrorBlock';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { useGetAllProjectionsQuery } from '../../projections/api/projectionsApi';
import ProjectionItem from './ProjectionItem';

type AdminProjectionListProps = {
  showReservations: () => void;
};

const AdminProjectionList = ({
  showReservations,
}: AdminProjectionListProps) => {
  const { data, isLoading, isError, error } = useGetAllProjectionsQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorBlock message={error.message!} title={error.name!} />;
  }
  return (
    <>
      <p className="flex mb-5  text-lg font-bold px-4">
        <span className="w-1/2">Showing Time</span>
        <span className="w-1/2">Movie TItle</span>
      </p>
      <ul>
        {data?.map((projection) => {
          return (
            <ProjectionItem
              title={projection.movie.name}
              date={projection.showingTime}
              id={projection.id}
              key={projection.id}
              showReservations={showReservations}
            />
          );
        })}
      </ul>
    </>
  );
};

export default AdminProjectionList;
