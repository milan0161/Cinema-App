import CinemaLocation from './CinemaLocation';
import ContanctInfo from './ContanctInfo';

const AboutInformation = () => {
  return (
    <div className="flex w-fit mt-10 gap-10 mx-auto">
      <div>
        <h2>Informations:</h2>
        <ContanctInfo />
      </div>
      <CinemaLocation />
    </div>
  );
};

export default AboutInformation;
