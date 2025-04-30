import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="py-20 bg-charity-teal relative">
      <div className="absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
          alt="Clean water initiative" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h2 className="font-kazimir text-white text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
          Join us in bringing clean water to everyone, everywhere
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#" className="px-8 py-4 bg-charity-yellow text-charity-black font-bold rounded">
            DONATE MONTHLY
          </Link>
          <Link href="#" className="px-8 py-4 bg-white text-charity-black font-bold rounded">
            GIVE ONCE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
