import { useState } from 'react';
import { useGetProjectionsQuery } from '../api/projectionsApi';
import SingleProjection from './SingleProjection';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import { getTomorow, getYesterday } from '../../../app/utils/dates';
import ProjectionDatePagination from './ProjectionDatePagination';

const ProjectionsList = () => {
  const [showingTime, setShowingTIme] = useState<string>(
    new Date(Date.now()).toISOString().substring(0, 10),
  );

  const { data, isLoading } = useGetProjectionsQuery(showingTime);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const setTomorow = () => {
    setShowingTIme((prev) => {
      return getTomorow(prev);
    });
  };

  const setYesterday = () => {
    setShowingTIme((prev) => {
      return getYesterday(prev);
    });
  };

  return (
    <div>
      <div className="my-4 flex justify-between items-center">
        <div>
          <label htmlFor="">Chose Date to see projections on that day </label>
          <input
            value={showingTime}
            onChange={(e) => {
              setShowingTIme(e.target.value);
            }}
            className="text-black ml-5"
            type="date"
          />
        </div>
        <div className="flex gap-2">
          <ProjectionDatePagination
            setTomorow={setTomorow}
            setYesterday={setYesterday}
            date={showingTime}
          />
        </div>
      </div>
      {data && data?.length < 1 && (
        <h2 className="text-center mt-5">Today we have nothing on repertoar</h2>
      )}
      {data && data?.length > 0 && (
        <ul className="flex flex-row gap-4 flex-wrap">
          {data?.map((proj) => {
            return <SingleProjection key={proj.id} projection={proj} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ProjectionsList;
