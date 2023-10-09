import ChairIcon from '@mui/icons-material/Chair';

type HallProps = {
  hall: Hall;
};
const Hall = ({ hall }: HallProps) => {
  let hallSeats = 0;
  hallSeats = hall.name == 'MainHall' ? 100 : 70;
  return (
    <div>
      <div className="flex-1 border border-slate-300 rounded h-fit pb-5">
        <h2 className="text-center my-5">{hall.name}</h2>
        <ol className="flex flex-wrap justify-center max-w-[500px] mx-auto mb-10">
          {Array(hallSeats)
            .fill(0)
            .map((_, i) => (
              <li key={i}>
                <ChairIcon />
              </li>
            ))}
        </ol>
        <hr className="border-slate-100 border-2 w-4/6 mx-auto" />
      </div>
      <p className="text-center mt-5">
        Current number of projection in the {hall.name} is{' '}
        {hall.numberOfProjections}
      </p>
    </div>
  );
};

export default Hall;
