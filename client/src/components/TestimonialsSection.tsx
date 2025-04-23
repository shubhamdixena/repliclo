const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Before charity: water came to our village, I would walk four hours every day to collect water for my family. Now, I can attend school and dream of becoming a teacher.",
      name: "Sarah, 12",
      location: "Ethiopia",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      quote: "Access to clean water has changed everything for our community. Our children are healthier, and we can grow more crops. This is not just water — it's hope for the future.",
      name: "Michael",
      location: "Uganda",
      image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-kazimir text-4xl font-bold mb-6">Stories of Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Behind every water project are real people whose lives are transformed by access to clean water.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div className="flex flex-col md:flex-row gap-8 items-center" key={testimonial.id}>
              <div className="md:w-1/2">
                <img 
                  src={testimonial.image}
                  alt="Community member" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <blockquote className="italic text-lg text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
