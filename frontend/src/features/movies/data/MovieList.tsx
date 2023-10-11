import { useGetMoviesQuery } from '../api/movieApi';
import SingleMovie from './SingleMovie';
import LoadingIndicator from '../../../common/components/ui/LoadingIndicator';
import PaginationComponent from '../../../common/components/ui/PaginationComponent';
import { useState } from 'react';

const MovieList = (): JSX.Element => {
  const [searchAndPagination, setSearchAndPagination] = useState({
    searchTerm: '',
    pageNumber: 1,
    pageSize: 12,
  });
  const {
    data: response,
    isError,
    error,
    isLoading,
  } = useGetMoviesQuery(searchAndPagination);

  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }
  if (isLoading) {
    return <LoadingIndicator />;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setSearchAndPagination((prev) => {
      return { ...prev, pageNumber: value };
    });
  };

  return (
    <div className="flex flex-col gap-y-5">
      <ul className="grid grid-cols-6 border border-slate-300 grid-flow-row gap-y-10 gap-x-2 p-2 overflow-hidden">
        {response?.data?.map((m, i) => {
          return <SingleMovie i={i} key={m.id} movie={m} showHover={true} />;
        })}
      </ul>
      <PaginationComponent
        onChange={handleChange}
        count={response?.totalPages}
        page={searchAndPagination.pageNumber}
      />
    </div>
  );
};

export default MovieList;
