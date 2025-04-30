import { Link } from "wouter";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Well Construction",
      description: "We're bringing clean, safe drinking water to rural communities by drilling wells that tap into underground aquifers.",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Rainwater Harvesting",
      description: "In regions with ample rainfall, we build systems to collect, filter, and store rainwater for community use.",
      image: "https://images.unsplash.com/photo-1627391593674-e211ae83181f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Spring Protection",
      description: "Natural springs can provide clean water when properly captured and protected from contamination.",
      image: "https://images.unsplash.com/photo-1584879599497-5c80b1cb6765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-kazimir text-4xl font-bold mb-6">Our Water Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with local partners to implement practical and sustainable water solutions that meet the specific needs of each community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-md" key={project.id}>
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href="#" className="text-charity-blue font-medium">Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#" className="inline-block px-6 py-3 bg-charity-yellow text-charity-black font-bold rounded">
            SEE ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
