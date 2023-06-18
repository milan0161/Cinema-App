import React from 'react';
import { useGetProjectionsQuery } from '../api/projectionsApi';
import SingleProjection from './SingleProjection';

interface ProjListProps {
  date: Date;
}

const ProjectionsList = ({ date }: ProjListProps): React.JSX.Element => {
  const { data, isError, error } = useGetProjectionsQuery(date.toISOString());

  let content;
  if (isError) {
    content = <p className="text-center">{error.message}</p>;
  }
  if (data) {
    content = (
      <ul className="flex flex-row gap-x-10 flex-wrap p-2">
        {data.projections.map((proj) => {
          return <SingleProjection key={proj.movie.id} projection={proj} />;
        })}
      </ul>
    );
  }
  return <>{content}</>;
};

export default ProjectionsList;
