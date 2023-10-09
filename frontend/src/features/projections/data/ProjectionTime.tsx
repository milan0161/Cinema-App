type ProjectionTimeProps = {
  showingTime: string | undefined;
};

const ProjectionTime = ({ showingTime }: ProjectionTimeProps) => {
  const time = new Date(showingTime!).toLocaleDateString('en', {
    minute: '2-digit',
    hour: '2-digit',
    second: '2-digit',
    month: 'long',
    weekday: 'long',
    day: '2-digit',
  });

  return <span>{time}</span>;
};

export default ProjectionTime;
