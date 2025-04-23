import DonationForm from './DonationForm';

const HeroSection = () => {
  return (
    <section className="relative bg-charity-teal">
      <div className="absolute inset-0 z-10">
        <img 
          src="/attached_assets/84223d6a-fb5b-41d2-80a7-355935c72d78.png" 
          alt="Child drinking clean water" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-kazimir text-white text-4xl md:text-5xl font-bold leading-tight max-w-md mb-6">
              Bring clean and safe water to every person on the planet
            </h1>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <DonationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
