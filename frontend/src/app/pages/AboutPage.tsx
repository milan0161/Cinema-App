import AboutInformation from '../../common/components/about/AboutInformation';
import HowWeWorkContent from '../../common/components/about/HowWeWorkContent';
import WhoWeAreContent from '../../common/components/about/WhoWeAreContent';
import HorizontalLine from '../../common/components/ui/HorizontalLine';

const AboutPage = () => {
  return (
    <section className=" shadow-sm shadow-white p-5">
      <div className="mb-20">
        <div className="w-1/2 mx-auto my-10">
          <h1 className="text-center mb-10">About Us</h1>
          <HorizontalLine />
        </div>
        <div>
          <p className="font-bold text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sunt consequatur deleniti expedita voluptatibus, omnis hic quibusdam
            tempora voluptas voluptate.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="text-center text-[32px] my-5">Who we are</h2>
          <WhoWeAreContent />
        </div>
        <div>
          <h2 className="text-center text-[32px] my-5">How we work</h2>
          <HowWeWorkContent />
        </div>
      </div>
      <div className="mt-10">
        <HorizontalLine />
        <AboutInformation />
      </div>
    </section>
  );
};

export default AboutPage;
