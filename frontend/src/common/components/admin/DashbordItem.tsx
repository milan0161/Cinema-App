type DashboardItemProps = {
  title: string;
  data: number | string;
};

const DashboardItem = ({ data, title }: DashboardItemProps) => {
  return (
    <li className="flex-1 border border-slate-300 h-28">
      <h2 className="text-center mt-5">{title}</h2>
      <p className="text-center">{data}</p>
    </li>
  );
};

export default DashboardItem;
