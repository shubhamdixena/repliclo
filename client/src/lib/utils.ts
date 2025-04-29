import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function loadScholarshipsData() {
  try {
    const response = await fetch('/assets/datascholar.csv');
    const csvText = await response.text();
    
    // Simple CSV parser (you might want to use a proper CSV parser library in production)
    const rows = csvText.split('\n').map(row => row.split(','));
    const headers = rows[0];
    const data = rows.slice(1).map(row => {
      const obj: { [key: string]: string } = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = row[index]?.trim() || '';
      });
      return obj;
    });
    
    return data;
  } catch (error) {
    console.error('Error loading scholarships data:', error);
    return [];
  }
}

export interface UniversityData {
  university: string;
  location: string;
  program: string;
  intake: string;
  duration: string;
  tuitionFees: string;
  gmatGreWaiver: string;
  recommendedScores: {
    gmat: string;
    gre: string;
  };
  eligibility: string;
  eligibilityUrl: string;
  classProfile: {
    averageWorkExperience: string;
    averageGreScore: string;
    averageGpa: string;
    averageGmatScore: string;
    averageAge: string;
    url: string;
  };
  employmentStatistics: {
    consulting: string;
    finance: string;
    marketing: string;
    informationTechnology: string;
    averageSalary: string;
    roi: string;
  };
  deadlines: string;
  applicationRequirements: {
    essays: string;
    recommendations: string;
    resume: string;
    transcripts: string;
    testScores: string;
    interview: string;
  };
}

export async function loadUniversityData(): Promise<UniversityData[]> {
  try {
    const response = await fetch('/assets/datauniversity.csv');
    const csvText = await response.text();
    
    // Split CSV into rows and handle quoted values properly
    const rows = csvText.split('\n').map(row => {
      const values = [];
      let value = '';
      let insideQuotes = false;
      
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(value.trim());
          value = '';
        } else {
          value += char;
        }
      }
      values.push(value.trim());
      return values;
    });

    const headers = rows[0];
    const data = rows.slice(1).map(row => {
      const university: UniversityData = {
        university: row[headers.indexOf('University')] || '',
        location: row[headers.indexOf('Location')] || '',
        program: row[headers.indexOf('Program')] || '',
        intake: row[headers.indexOf('Intake')] || '',
        duration: row[headers.indexOf('Duration')] || '',
        tuitionFees: row[headers.indexOf('Tuition Fees')] || '',
        gmatGreWaiver: row[headers.indexOf('GMAT/GRE Waiver')] || '',
        recommendedScores: {
          gmat: row[headers.indexOf('Recommended Scores - Recommended GMAT')] || '',
          gre: row[headers.indexOf('Recommended Scores - Recommended GRE')] || ''
        },
        eligibility: row[headers.indexOf('Eligibility')] || '',
        eligibilityUrl: row[headers.indexOf('Eligibility URL')] || '',
        classProfile: {
          averageWorkExperience: row[headers.indexOf('Class Profile - Average Work Experience')] || '',
          averageGreScore: row[headers.indexOf('Class Profile - Average GRE Score')] || '',
          averageGpa: row[headers.indexOf('Class Profile - Average GPA')] || '',
          averageGmatScore: row[headers.indexOf('Class Profile - Average GMAT Score')] || '',
          averageAge: row[headers.indexOf('Class Profile - Average Age')] || '',
          url: row[headers.indexOf('Class Profile URL')] || ''
        },
        employmentStatistics: {
          consulting: row[headers.indexOf('Employment Statistics - Consulting')] || '',
          finance: row[headers.indexOf('Employment Statistics - Finance')] || '',
          marketing: row[headers.indexOf('Employment Statistics - Marketing')] || '',
          informationTechnology: row[headers.indexOf('Employment Statistics - Information Technology')] || '',
          averageSalary: row[headers.indexOf('Employment Statistics - Average Salary (in $)')] || '',
          roi: row[headers.indexOf('Employment Statistics - ROI (3 years avg. salary/Total tuition fee)')] || ''
        },
        deadlines: row[headers.indexOf('Deadlines')] || '',
        applicationRequirements: {
          essays: row[headers.indexOf('Application Requirements - Essays')] || '',
          recommendations: row[headers.indexOf('Application Requirements - Letter of Recommendations')] || '',
          resume: row[headers.indexOf('Application Requirements - Resume')] || '',
          transcripts: row[headers.indexOf('Application Requirements - Transcripts')] || '',
          testScores: row[headers.indexOf('Application Requirements - Test Scores')] || '',
          interview: row[headers.indexOf('Application Requirements - Interview')] || ''
        }
      };
      return university;
    });
    
    return data.filter(university => university.university); // Filter out empty rows
  } catch (error) {
    console.error('Error loading university data:', error);
    return [];
  }
}
