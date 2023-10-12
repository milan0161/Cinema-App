type ProjectionTimeProps = {
  showingTime: string | undefined;
};

const ProjectionTime = ({ showingTime }: ProjectionTimeProps) => {
  const time = new Date(showingTime!).toLocaleDateString('en-Us', {
    minute: '2-digit',
    hour12: false,
    hour: '2-digit',
    month: 'long',
    weekday: 'long',
    day: '2-digit',
  });

  return <span>{time}</span>;
};

export default ProjectionTime;
