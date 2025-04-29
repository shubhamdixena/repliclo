import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Onboarding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-kazimir text-4xl font-bold mb-8">Welcome to charity: water</h1>
            <p className="text-gray-600 text-lg mb-12">Let's get started with making a difference.</p>
            
            {/* Add your onboarding steps here */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Step 1: Choose Your Impact</h2>
                <p className="text-gray-600 mb-4">Select how you'd like to contribute to our mission.</p>
                {/* Add step 1 content */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Step 2: Set Your Goals</h2>
                <p className="text-gray-600 mb-4">Define what you want to achieve.</p>
                {/* Add step 2 content */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Step 3: Start Your Journey</h2>
                <p className="text-gray-600 mb-4">Begin making an impact today.</p>
                {/* Add step 3 content */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;