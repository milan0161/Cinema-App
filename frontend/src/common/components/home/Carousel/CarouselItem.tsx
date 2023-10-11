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
      className="h-[450px] aspect-[3/4]"
      // src={`${publicUrl}/${image}`}
      src={movieImage}
      alt=""
    />
  );
};

export default CarouselItem;
