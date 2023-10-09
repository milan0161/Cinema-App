import { useParams } from 'react-router-dom';
import ProjectionDetails from '../../features/projections/data/ProjectionDetails';

const ProjectionDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen">
      <ProjectionDetails id={id!} />
    </div>
  );
};

export default ProjectionDetailsPage;
