import { CSSProperties } from 'react';
import { FadeLoader } from 'react-spinners';

const override: CSSProperties = {
  margin: '10% auto 0 auto',
  textAlign: 'center',
};

const LoadingIndicator = () => {
  return (
    <>
      <FadeLoader
        height={'70px'}
        cssOverride={override}
        color="#333"
        aria-label="Loading Spiner"
      />
      {/* <p className="text-xl font-bold">Loading...</p> */}
    </>
  );
};

export default LoadingIndicator;
