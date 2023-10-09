import { useGetProjectionsQuery } from '../../projections/api/projectionsApi';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import AdminProjectionItem from './AdminProjectionitem';
import { IProjection } from '../../projections/types';

type AdminProjectionsProps = {
  date: string;
  showEdit: (showing: boolean, projection: IProjection) => void;
};

const AdminProjections = ({ date, showEdit }: AdminProjectionsProps) => {
  const { data, isLoading } = useGetProjectionsQuery(date);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="mt-4">
      <ul>
        {data &&
          data.map((proj) => {
            return (
              <AdminProjectionItem
                showEdit={showEdit}
                key={proj.id}
                projection={proj}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default AdminProjections;
