import { useState } from 'react';
import ProjectionsList from '../../features/projections/data/ProjectionsList';

const AdminProjectionsPage = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [date, setDate] = useState<Date>(today);
  let tomorow = new Date(date);
  console.log(date);
  tomorow.setDate(tomorow.getDate() + 1);
  let yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);

  const nextDayHandler = () => {
    setDate((prev) => {
      //nadji nacin da updejtujes state
      return prev;
    });
  };
  const previusDayHandler = () => {
    setDate((prev) => {
      const noviDate = prev.setDate(prev.getDate() - 1);
      return new Date(noviDate);
    });
  };
  return (
    <div className="w-full h-[75vh] flex flex-col">
      <div className="flex flex-row gap-x-2 px-2">
        <button onClick={previusDayHandler}>{yesterday.toLocaleDateString()}</button>
        <button className="border border-slate-300 p-2 font-bold">{date.toLocaleDateString()}</button>
        <button onClick={nextDayHandler} className="">
          {tomorow.toLocaleDateString()}
        </button>
      </div>
      <div className="overflow-auto">
        <ProjectionsList date={date} />
      </div>
    </div>
  );
};

export default AdminProjectionsPage;
