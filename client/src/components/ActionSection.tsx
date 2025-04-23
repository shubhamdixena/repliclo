import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import the provided assets
const joinMonthlyImage = "/attached_assets/assets_2fe4147bb8c843bb8ebba475c8973899_454f9ac0ec2d4d8d943786cc109b59a4.png";
const legacyGivingImage = "/attached_assets/assets_2fe4147bb8c843bb8ebba475c8973899_2145c4221b334fc6a55b338abf12d45f.png";
const giveFundraiserImage = "/attached_assets/assets_2fe4147bb8c843bb8ebba475c8973899_a7a3785051b74859bd50e10adbf983b9.png";
const startFundraiserImage = "/attached_assets/assets_2fe4147bb8c843bb8ebba475c8973899_cbcc89b46e664c09a63f4fc16c6384b5.png";

interface ActionCardProps {
  image: string;
  title: string;
  icon: string;
  description?: string;
}

const ActionCard = ({ image, title, icon, description }: ActionCardProps) => (
  <div className="relative rounded-lg overflow-hidden h-[400px] group">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    
    {description ? (
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white mb-6">{description}</p>
        <button className="px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded">
          GET STARTED
        </button>
      </div>
    ) : (
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center">
          <div className="bg-charity-yellow rounded-full p-2 mr-3">
            <img src={icon} alt="" className="w-5 h-5" />
          </div>
          <span className="text-white uppercase font-bold tracking-wider">{title}</span>
        </div>
      </div>
    )}
  </div>
);

const ActionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-[#FBF7EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-kazimir text-4xl font-bold mb-4">Ready to take action?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            There are lots of great ways to help us end the global water crisis.
            Take action today, and change lives.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* First slide */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <ActionCard 
                    image={joinMonthlyImage}
                    title="JOIN MONTHLY GIVING"
                    icon="🚰"
                  />
                  <div className="bg-gray-900 rounded-lg p-8 flex flex-col justify-center">
                    <h3 className="text-white text-xl font-bold mb-4">Start a fundraiser</h3>
                    <p className="text-gray-300 mb-6">
                      Support clean water projects by raising funds for people in need.
                    </p>
                    <button className="px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded">
                      GET STARTED
                    </button>
                  </div>
                  <ActionCard 
                    image={giveFundraiserImage}
                    title="GIVE TO A FUNDRAISER"
                    icon="🎁"
                  />
                  <ActionCard 
                    image={legacyGivingImage}
                    title="PLAN FOR LEGACY GIVING"
                    icon="🕯️"
                  />
                </div>
              </div>
              
              {/* Second slide */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <ActionCard 
                    image={startFundraiserImage}
                    title="START A FUNDRAISER"
                    icon="🏁"
                  />
                  <ActionCard 
                    image={joinMonthlyImage}
                    title="GIVE MONTHLY"
                    icon="💧"
                    description="Your monthly gift will help fund clean water projects that change lives forever."
                  />
                  <ActionCard 
                    image={giveFundraiserImage}
                    title="DONATE ONCE"
                    icon="💰"
                  />
                  <div className="bg-charity-teal rounded-lg p-8 flex flex-col justify-center text-white">
                    <h3 className="text-xl font-bold mb-4">Join The Spring</h3>
                    <p className="mb-6">
                      Be part of our monthly giving community changing thousands of lives each month.
                    </p>
                    <button className="px-6 py-3 bg-white text-charity-teal font-bold rounded">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentSlide ? 'bg-charity-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;