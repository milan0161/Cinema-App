import { useState } from 'react';
import AdminProjections from '../../../features/admin/data/AdminProjections';
import EditProjectionForm from '../../../common/components/form/EditProjectionForm';
import { IProjection } from '../../../features/projections/types';
import ProjectionDatePagination from '../../../features/projections/data/ProjectionDatePagination';

const AdminProjectionsPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [projectionData, setProjectionData] = useState<IProjection | null>(
    null,
  );
  const [date, setDate] = useState<string>(
    new Date(Date.now()).toISOString().substring(0, 10),
  );

  const prevDay = () => {
    setDate((prev) => {
      return new Date(new Date(prev).getTime() - 60 * 60 * 24 * 1000)
        .toISOString()
        .substring(0, 10);
    });
  };

  const nextDay = () => {
    setDate((prev) => {
      return new Date(new Date(prev).getTime() + 60 * 60 * 24 * 1000)
        .toISOString()
        .substring(0, 10);
    });
  };

  const showEditHandler = (showing: boolean, projection: IProjection) => {
    setIsEdit(showing);
    setProjectionData(projection);
  };

  return (
    <section className="w-full">
      {!isEdit && (
        <div className="flex gap-x-2 justify-center items-center p-2">
          <ProjectionDatePagination
            date={date}
            setTomorow={nextDay}
            setYesterday={prevDay}
          />
        </div>
      )}
      {!isEdit && <AdminProjections showEdit={showEditHandler} date={date} />}
      {isEdit && (
        <EditProjectionForm showEdit={setIsEdit} projection={projectionData} />
      )}
    </section>
  );
};

export default AdminProjectionsPage;
