import { getTomorow, getYesterday } from '../../../app/utils/dates';
type ProjectionDatePaginationProps = {
  date: string;
  setTomorow: () => void;
  setYesterday: () => void;
};

const ProjectionDatePagination = ({
  date,
  setTomorow,
  setYesterday,
}: ProjectionDatePaginationProps) => {
  const shortDate = new Date(date).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  });
  const yesterday = new Date(getYesterday(date)).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  });
  const tomorow = new Date(getTomorow(date)).toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  });

  return (
    <>
      <button
        className="border border-slate-300 px-2 py-1 rounded hover:bg-white hover:text-black duration-300"
        onClick={setYesterday}
      >
        {yesterday}
      </button>
      <p className="py-1 font-bold">{shortDate}</p>
      <button
        className="border border-slate-300 px-2 py-1 rounded hover:bg-white hover:text-black duration-300"
        onClick={setTomorow}
      >
        {tomorow}
      </button>
    </>
  );
};

export default ProjectionDatePagination;
