import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Feature story section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="order-2 md:order-1">
                <div className="bg-[#F1F1F1] px-3 py-2 rounded-md inline-block mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">PREP TALK</span>
                </div>
                <h2 className="font-kazimir text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  From once a day to twice a year
                </h2>
                <p className="text-gray-700 text-lg mb-10">
                  Long-acting preventatives will save more lives from HIV/AIDS.
                </p>
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/assets/111824 - HIV-PREP - BLOGROLL IMAGE - 800x484.jpg" 
                    alt="HIV Preventative Medication" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/placeholder.jpg';
                    }}
                  />
                  <button className="absolute right-5 top-5 bg-white rounded-full p-2.5 shadow-md hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/20241108-HITF-Dora-vNext-2400x1500-001.jpeg"
                    alt="Woman in field" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ minHeight: "600px" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/placeholder.jpg';
                    }}
                  />
                  
                  <div className="absolute bottom-8 left-8 bg-white p-7 rounded-lg max-w-xs shadow-lg">
                    <div className="text-sm font-bold uppercase tracking-wider text-charity-teal mb-2">
                      DORA THE PLANT EXPLORER
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      She's up at 3 a.m. to help farmers thrive
                    </h3>
                    <p className="text-gray-700 font-medium">
                      Dora Shimbwambwa looks for novel ways to fight invasive pests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legacy section */}
        <section className="py-16 md:py-24 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/assets/assets_2fe4147bb8c843bb8ebba475c8973899_4e8172a8fa9b4a8cb8432ed6b9fcb0bb.jpeg"
                  alt="Girl at water fountain" 
                  className="w-full rounded-lg shadow-xl"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/placeholder.jpg';
                  }}
                />
              </div>
              <div className="bg-[#F8F6F0] p-8 md:p-12 rounded-lg shadow-md">
                <h2 className="font-kazimir text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Don't have a will or trust? Start here.
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  We've partnered with FreeWill to make it easy for you to make a will or trust at no cost.
                </p>
                <div className="flex flex-wrap gap-5">
                  <button className="px-7 py-3.5 bg-charity-yellow text-charity-black font-bold rounded text-sm shadow-sm hover:shadow-md transition-shadow">
                    START YOUR WILL
                  </button>
                  <button className="px-7 py-3.5 bg-transparent border border-gray-300 text-gray-700 font-bold rounded text-sm hover:bg-gray-50 transition-colors">
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
            <h2 className="font-kazimir text-3xl md:text-5xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="divide-y divide-gray-200">
                {/* FAQ Item 1 */}
                <div className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-lg">Is my estate big enough to leave a planned gift?</h3>
                      <div className="transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 pr-12">
                      <p>No matter the size of your estate, you can make a meaningful impact through a planned gift. Every gift, regardless of size, helps bring clean water to communities in need and creates a lasting legacy.</p>
                    </div>
                  </details>
                </div>
                
                {/* FAQ Item 2 */}
                <div className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-lg">Can my gift remain anonymous?</h3>
                      <div className="transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 pr-12">
                      <p>Yes, you can choose to remain anonymous. We respect your privacy and will honor your wishes regarding recognition of your gift.</p>
                    </div>
                  </details>
                </div>
                
                {/* FAQ Item 3 */}
                <div className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-lg">Does it cost anything to plan my estate?</h3>
                      <div className="transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 pr-12">
                      <p>Through our partnership with FreeWill, you can create a legally valid will or living trust at no cost. While some people choose to work with an attorney, FreeWill provides a free option that makes this important planning accessible to everyone.</p>
                    </div>
                  </details>
                </div>
                
                {/* FAQ Item 4 */}
                <div className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-lg">Can I edit my documents after I'm done?</h3>
                      <div className="transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 pr-12">
                      <p>Yes, if you use FreeWill to create your estate plans, you can update your documents at any time. It's a good idea to review your will or trust periodically, especially after major life events like marriage, births, or significant changes in assets.</p>
                    </div>
                  </details>
                </div>
                
                {/* FAQ Item 5 */}
                <div className="py-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-lg">How will charity: water use my planned gift?</h3>
                      <div className="transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 pr-12">
                      <p>100% of your gift will fund clean water projects. Our unique funding model ensures that every dollar of public donations goes directly to bringing clean water to people in need. A separate group of donors, called The Well, funds our operating costs.</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="py-20 md:py-28 bg-[#F8F6F0]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/assets/Screenshot 2025-04-23 at 2.08.07 PM.png" 
                  alt="Water sensor diagram" 
                  className="w-full"
                />
              </div>
              <div>
                <h2 className="font-kazimir text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  The Next Step In Sustainability
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Working with local leaders to keep water flowing is critical to our mission.
                  In November 2015, charity: water started deploying cutting-edge sensors
                  and cloud computing technology to equip local leaders with real-time data.
                </p>
                <button className="px-7 py-3.5 bg-charity-yellow text-charity-black font-bold rounded shadow-sm hover:shadow-md transition-shadow text-sm">
                  SEE OUR SENSORS
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnerships Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 max-w-xl">
                <div className="text-sm font-proxima font-bold uppercase tracking-wider text-[#1D85FF] mb-6">
                  BRAND PARTNERSHIPS
                </div>
                <h2 className="font-kazimir text-4xl md:text-[56px] mb-6 leading-[1.1] text-[#1A1A1A]">
                  Name something everyone agrees on. We'll wait.
                </h2>
                <p className="font-proxima text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                  Actually, we can't wait long — not when 703 million people are living 
                  without access to clean water. The good news? Our Brand Partners 
                  aren't wasting any time. They continue to prove that if there's one thing 
                  we can all agree on, it's that clean water is a basic human right.
                </p>
                <button className="px-8 py-4 bg-[#FFD100] text-black font-proxima font-bold rounded hover:shadow-lg transition-shadow duration-300 text-sm uppercase tracking-wide">
                  Partner with us
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/Screenshot 2025-04-23 at 2.07.08 PM.png" 
                    alt="Three women smiling at a water pump" 
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '4/3' }}
                />
                </div>
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