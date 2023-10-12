import { useParams } from 'react-router-dom';
import { useGetSingleMovieQuery } from '../../features/movies/api/movieApi';
import { publicUrl } from '../../api/axios';
import LoadingIndicator from '../../common/components/ui/LoadingIndicator';

const SingleMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleMovieQuery(+id!);

  if (isError) {
    return <h1 className="text-center text-red-600">{error.message}</h1>;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  let movieImage = data?.mainPhoto?.startsWith('public')
    ? `${publicUrl}/${data.mainPhoto}`
    : `${data?.mainPhoto}`;

  return (
    <section className="my-2 flex flex-row shadow-sm shadow-white rounded overflow-hidden movie_details">
      <div className="">
        <img
          className="w-[500px] h-[700px]"
          src={movieImage}
          alt={data?.name}
        />
      </div>
      <div className=" flex-1 flex flex-col px-10">
        <h1 className="text-center my-4 text-[35px]">{data?.name}</h1>
        <div className="flex flex-col gap-y-10">
          <p className="movie_descrip">
            <strong>Year:</strong>
            {data?.year}
          </p>
          <p className="movie_descrip">
            <strong>Country:</strong>
            {data?.country}
          </p>
          <p className="movie_descrip">
            <strong>Genre:</strong>
            {data?.genre}
          </p>
          <p className="movie_descrip">
            <strong>Duration:</strong>
            {data?.duration}min
          </p>
          <p className="movie_descrip">
            <strong>Director:</strong>
            {data?.director}
          </p>
          <p className="movie_descrip">
            <strong>Actors:</strong>
            {data?.actors}
          </p>
          <p className="movie_descrip">
            <strong>Description:</strong>
            {data?.description}
          </p>
          <p className="movie_descrip">
            <strong>Genre:</strong>
            {data?.genre}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMoviePage;
