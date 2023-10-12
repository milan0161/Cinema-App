import { useEffect, useState } from 'react';
import { useGetFiveMovieImagesQuery } from '../../../../features/movies/api/movieApi';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import ErrorBlock from '../../ui/ErrorBlock';
import LoadingIndicator from '../../ui/LoadingIndicator';
import CarouselItem from './CarouselItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const CarouselContainer = () => {
  const { data, isError, error, isLoading, isSuccess } =
    useGetFiveMovieImagesQuery();
  const [index, setIndex] = useState<number>(0);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setInterval(() => {
  //       setIndex((prev) => {
  //         if (prev === data!.length - 1) {
  //           return 0;
  //         } else {
  //           return prev + 1;
  //         }
  //       });
  //     }, 1500);
  //   }
  // }, [data]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorBlock message={error.message!} title={error.name!} />;
  }

  const nextImageHandler = () => {
    setIndex((prev) => {
      if (prev === data!.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const previousImagehandler = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return data!.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="mx-auto flex h-full w-5/6 2xl:w-[60rem] xl:w-[60rem] flex-col justify-center shadow-lg shadow-white/50">
        <div className=" shadow-slate-300 relative overflow-hidden">
          <motion.button
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-1/2 left-2 z-10"
            type="button"
            onClick={previousImagehandler}
          >
            <FontAwesomeIcon size="2x" icon={faChevronCircleLeft} />
          </motion.button>
          <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
            {data &&
              data.length > 0 &&
              data.map((img) => <CarouselItem key={img} image={img} />)}
          </motion.div>
          <motion.button
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-1/2 right-2"
            type="button"
            onClick={nextImageHandler}
          >
            <FontAwesomeIcon size="2x" icon={faChevronCircleRight} />
          </motion.button>
        </div>
      </div>
    </MotionConfig>
  );
};

export default CarouselContainer;
