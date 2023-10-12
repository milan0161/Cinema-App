import ProjectionsList from '../../features/projections/data/ProjectionsList';

const ProgramPage = () => {
  return (
    <main className="mt-10 min-h-screen">
      <h2 className="text-center text-2xl my-4">Projections in our Cinema</h2>
      <ProjectionsList />
    </main>
  );
};

export default ProgramPage;
