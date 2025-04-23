const ImpactSection = () => {
  const impactStats = [
    { 
      stat: "100%",
      description: "of public donations go directly to water projects" 
    },
    { 
      stat: "14.7M+",
      description: "people served with clean water" 
    },
    { 
      stat: "29",
      description: "countries with water projects" 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-kazimir text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since 2006, charity: water has funded water projects in 29 countries, bringing clean and safe drinking water to over 14.7 million people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div className="text-center" key={index}>
              <h3 className="text-5xl font-bold text-charity-black mb-2">{stat.stat}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
