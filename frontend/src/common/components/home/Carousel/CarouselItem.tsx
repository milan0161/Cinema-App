import { publicUrl } from '../../../../api/axios';
type CarouselItemProps = {
  image: string | undefined;
};
const CarouselItem = ({ image }: CarouselItemProps) => {
  let movieImage = image?.startsWith('public')
    ? `${publicUrl}/${image}`
    : `${image}`;
  return (
    <img
      className="aspect-[4/2] w-[100%] 2xl:w-[60rem]"
      // src={`${publicUrl}/${image}`}
      src={movieImage}
      alt=""
    />
  );
};

export default CarouselItem;
