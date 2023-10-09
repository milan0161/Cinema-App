const ReservationDate = ({ date }: { date: string }) => {
  return (
    <span className="flex-1">
      {new Date(date).toLocaleDateString('en-US', {
        minute: '2-digit',
        hour: '2-digit',
        hour12: false,
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })}
    </span>
  );
};

export default ReservationDate;
