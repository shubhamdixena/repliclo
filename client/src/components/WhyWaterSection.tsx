import { Link } from "wouter";

const WhyWaterSection = () => {
  return (
    <section className="bg-[#FBF7EE] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">WHY WATER?</span>
        </div>
        
        <h2 className="font-kazimir text-center text-4xl md:text-5xl font-bold mb-10">
          Because clean water changes everything
        </h2>
        
        <div className="max-w-5xl mx-auto mb-12 relative rounded-lg overflow-hidden">
          <img 
            src="/attached_assets/assets_2fe4147bb8c843bb8ebba475c8973899_c5aa1dfb86c24d98a0cf079d40f26c01.webp" 
            alt="Woman accessing clean water" 
            className="w-full object-cover rounded-lg" 
          />
          
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-center">
            <div className="flex space-x-2 bg-white px-2 py-1 rounded-full">
              <button className="px-3 py-1 rounded-full bg-charity-blue text-white font-semibold text-xs">HEALTH</button>
              <button className="px-3 py-1 rounded-full hover:bg-gray-100 font-semibold text-xs text-gray-800">EDUCATION</button>
              <button className="px-3 py-1 rounded-full hover:bg-gray-100 font-semibold text-xs text-gray-800">WOMEN</button>
              <button className="px-3 py-1 rounded-full hover:bg-gray-100 font-semibold text-xs text-gray-800">ECONOMIC GROWTH</button>
            </div>
          </div>
          
          <div className="absolute bottom-10 right-10 max-w-xs bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm">
              Access to clean water and basic sanitation can save around 16,000 lives every week.
            </p>
            <Link href="#" className="mt-2 inline-block text-charity-blue font-semibold text-sm uppercase">
              LEARN ABOUT LIVES CHANGED
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="font-kazimir text-3xl font-bold mb-4">
            703 million people lack basic access to clean and safe drinking water
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Our work to end the water crisis impacts every aspect of life. You can help provide education, income, dignity, and health — especially for women and children.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWaterSection;