import CarouselContainer from '../../common/components/home/Carousel/CarouselContainer';
import LoadingIndicator from '../../common/components/ui/LoadingIndicator';
import { useGetNewProjectionsQuery } from '../../features/projections/api/projectionsApi';
import SingleProjection from '../../features/projections/data/SingleProjection';

const HomePage = () => {
  const { data, isLoading } = useGetNewProjectionsQuery();
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <main className="flex flex-col gap-10 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center my-10 text-[45px]">Top 5 Movies</h1>
          <CarouselContainer />
        </div>
        <div>
          <h2 className="text-center my-5 text-2xl">
            New projections in our cinema
          </h2>
          <div className="flex flex-row flex-wrap gap-10">
            {data &&
              data.map((projection) => {
                return (
                  <SingleProjection
                    projection={projection}
                    key={projection.id}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
