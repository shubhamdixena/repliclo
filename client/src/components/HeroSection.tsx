import DonationForm from './DonationForm';

const HeroSection = () => {
  return (
    <section className="relative bg-charity-teal min-h-[90vh]">
      <div className="absolute inset-0 z-10">
        <img 
          src="/assets/hero-image-mobile.jpeg"
          alt="Clean water initiative" 
          className="w-full h-full object-cover md:hidden"
        />
        <img 
          src="/assets/hero-image.jpeg" 
          alt="Clean water initiative" 
          className="hidden md:block w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 flex items-center min-h-[90vh]">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-kazimir text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-lg mb-8">
              Bring clean and safe water to every person on the planet
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90 max-w-md mb-6">
              Join us in ending the water crisis in our lifetime.
            </p>
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
