import React from 'react';
import UniversityDetailDisplay from '@/components/dashboard/UniversityDetailDisplay';
import UniversityExplorer from '@/components/dashboard/UniversityExplorer'; // Import the UniversityExplorer component
import ScholarshipExplorer from '@/components/dashboard/ScholarshipExplorer'; // Import the ScholarshipExplorer component

// Sample University Data (as provided by the user)
const sampleUniversityData = {
  University:	"Carnegie Mellon University - Tepper School of Business",
  Location:	"USA",
  Program:	"MBA",
  Intake:	"September",
  Duration:	"18 Months",
  'Tuition Fees':	"USD 124,078",
  'GMAT/GRE Waiver':	"Yes",
  'Recommended Scores - Recommended GMAT':	714,
  'Recommended Scores - Recommended GRE':	396, // Assuming number based on context
  Eligibility:	"Minimum 2 years of work experience, Bachelor's degree with minimum GPA of 3.0",
  'Eligibility URL':	"https://www.carnegie.edu/programs/mba/admissions/eligibility",
  'Class Profile - Average Work Experience':	"4 Years",
  'Class Profile - Average GRE Score':	322,
  'Class Profile - Average GPA':	3.35,
  'Class Profile - Average GMAT Score':	705,
  'Class Profile - Average Age':	24,
  'Class Profile URL':	"https://www.carnegie.edu/programs/mba/class-profile",
  'Employment Statistics - Consulting':	"$ 90402.00", // Kept as string
  'Employment Statistics - Finance':	"$ 122963.00", // Kept as string
  'Employment Statistics - Marketing':	"$ 90954.00", // Kept as string
  'Employment Statistics - Information Technology':	"$ 128223.00", // Kept as string
  'Employment Statistics - Average Salary (in $)':	"$ 108135.00", // Kept as string
  'Employment Statistics - ROI (3 years avg. salary/Total tuition fee)':	"261%",
  Deadlines:	"Round 1: October 2, Round 2: January 8, Round 3: March 5",
  'Application Requirements - Essays':	"Essay 1: Tell us about your career goals and why you want to pursue a MBA at Carnegie Mellon University - Tepper School of Business. (500 words)\n\nEssay 2: Describe a challenge you've faced and how you overcame it. How did this experience shape your leadership style? (400 words)",
  'Application Requirements - Letter of Recommendations':	"2 Letters of Recommendation (1 Academic and 1 Professional)",
  'Application Requirements - Resume':	"Required",
  'Application Requirements - Transcripts':	"Required",
  'Application Requirements - Test Scores':	"GMAT/GRE (can be waived)",
  'Application Requirements - Interview':	"By invitation only"
};


const TestDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Educational Resource Dashboard</h1>

      <section className="mb-8">
        {/* Render the UniversityExplorer component */}
        <UniversityExplorer />
      </section>

      <section className="mb-8">
        {/* Render the ScholarshipExplorer component */}
        <ScholarshipExplorer />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SOP Database</h2>
        {/* SOP Database content will go here */}
        <p>SOP examples and filtering will be displayed here.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        {/* User Profile content will go here */}
        <p>User profile details, goal tracking, and settings will be displayed here.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Document Management</h2>
        {/* Document Management content will go here */}
        <p>Secure document storage and management features will be displayed here.</p>
      </section>

    </div>
  );
};

export default TestDashboard;
