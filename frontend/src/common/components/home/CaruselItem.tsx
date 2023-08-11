type CaruselItemProps = {
  item: { image: string; title: string; description: string };
};
const CaruselItem = ({ item }: CaruselItemProps) => {
  const publicUrl = import.meta.env.VITE_REACT_APP_BASE_PUBLIC_URL;
  return (
    <li className="inline-flex items-center justify-center whitespace-normal h-[300px] w-full">
      <img className="h-full" src={`${publicUrl}${item.image}`} alt="" />
      <div className="flex flex-col  w-full h-full p-2">
        <h2 className="text-2xl text-center pb-2">{item.title}</h2>
        <p className="text-xl">{item.description}</p>
      </div>
    </li>
  );
};

export default CaruselItem;
