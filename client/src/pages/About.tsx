import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Feature story section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 p-4 rounded-lg inline-block mb-4">
                  <span className="text-xs font-medium uppercase text-gray-600">PREP TALK</span>
                </div>
                <h2 className="font-kazimir text-3xl md:text-4xl font-bold mb-4">
                  From once a day to twice a year
                </h2>
                <p className="text-gray-700 mb-8">
                  Long-acting preventatives will save more lives from HIV/AIDS.
                </p>
                <div className="relative h-64 overflow-hidden rounded-lg shadow-md mb-4">
                  <img 
                    src="/assets/111824 - HIV-PREP - BLOGROLL IMAGE - 800x484.jpg" 
                    alt="HIV Preventative Medication" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute right-4 top-4 bg-white rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  <img 
                    src="/assets/Screenshot 2025-04-23 at 2.11.15 PM.png"
                    alt="Woman in field" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg max-w-xs">
                    <div className="text-sm font-medium uppercase text-gray-600 mb-2">
                      DORA THE PLANT EXPLORER
                    </div>
                    <h3 className="text-2xl font-bold text-charity-teal mb-2">
                      She's up at 3 a.m. to help farmers thrive
                    </h3>
                    <p className="text-gray-700">
                      Dora Shimbwambwa looks for novel ways to fight invasive pests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legacy section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/Screenshot 2025-04-23 at 2.09.30 PM.png" 
                  alt="Girl at water fountain" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-[#F8F6F0] p-8 md:p-12 rounded-lg">
                <h2 className="font-kazimir text-3xl md:text-4xl font-bold mb-4">
                  Don't have a will or trust? Start here.
                </h2>
                <p className="text-gray-700 mb-6">
                  We've partnered with FreeWill to make it easy for you to make a will or trust at no cost.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded text-sm">
                    START YOUR WILL
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-gray-300 text-gray-700 font-medium rounded text-sm">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-kazimir text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Is my estate big enough to leave a planned gift?</h3>
                    <button className="text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Can my gift remain anonymous?</h3>
                    <button className="text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Does it cost anything to plan my estate?</h3>
                    <button className="text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Can I edit my documents after I'm done?</h3>
                    <button className="text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">How will charity: water use my planned gift?</h3>
                    <button className="text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="py-16 md:py-24 bg-[#F8F6F0]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/Screenshot 2025-04-23 at 2.08.07 PM.png" 
                  alt="Water sensor diagram" 
                  className="w-full"
                />
              </div>
              <div>
                <h2 className="font-kazimir text-3xl md:text-4xl font-bold mb-4">
                  The Next Step In Sustainability
                </h2>
                <p className="text-gray-700 mb-6">
                  Working with local leaders to keep water flowing is critical to our mission.
                  In November 2015, charity: water started deploying cutting-edge sensors
                  and cloud computing technology to equip local leaders with real-time data.
                </p>
                <button className="px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded text-sm">
                  SEE OUR SENSORS
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnerships Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium uppercase text-blue-600 mb-2">
                  BRAND PARTNERSHIPS
                </div>
                <h2 className="font-kazimir text-3xl md:text-5xl font-bold mb-6">
                  Name something everyone agrees on. We'll wait.
                </h2>
                <p className="text-gray-700 mb-6">
                  Actually, we can't wait long — not when 703 million people are living 
                  without access to clean water. The good news? Our Brand Partners 
                  aren't wasting any time. They continue to prove that if there's one thing 
                  we can all agree on, it's that clean water is a basic human right.
                </p>
                <button className="px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded text-sm">
                  PARTNER WITH US
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/assets/Screenshot 2025-04-23 at 2.07.08 PM.png" 
                  alt="Women at water pump" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;