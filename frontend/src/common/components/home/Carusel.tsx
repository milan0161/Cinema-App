import { useEffect, useState } from 'react';
import { useGetImagesQuery } from '../../../features/movies/api/movieApi';
import CaruselItem from './CaruselItem';

const Carusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useGetImagesQuery();

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === 4) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
  }, []);

  return (
    <div className=" w-[1000px] h-[300px] border border-slate-300 overflow-hidden flex flex-col justify-center m-auto p-0">
      <ul
        className="transition transform duration-500 whitespace-nowrap"
        style={{ transform: `translatex(-${activeIndex * 100}%)` }}
      >
        {data?.images.map((image, index) => {
          return <CaruselItem item={image} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Carusel;
