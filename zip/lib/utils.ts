import { promises as fs } from 'fs'
import path from 'path'

export interface UniversityData {
  universityName: string;
  data: {
    University: string;
    Location: string;
    Program: string;
    Intake: string;
    Duration: string;
    TuitionFees: string;
    GMATGREWaiver: string;
    RecommendedScores: {
      RecommendedGMAT: number;
      RecommendedGRE: number;
    };
    Eligibility: string;
    EligibilityURL: string;
    ClassProfile: {
      AverageWorkExperience: string;
      AverageGREScore: number;
      AverageGPA: string;
      AverageGMATScore: number;
      AverageAge: number;
    };
    ClassProfileURL: string;
    EmploymentStatistics: {
      [key: string]: string;
      AverageSalary: string;
      ROI: string;
    };
    Deadlines: string;
    ApplicationRequirements: {
      Essays: string;
      LetterOfRecommendations: string;
      Resume: string;
      Transcripts: string;
      TestScores: string;
      Interview: string;
    };
  };
}

export async function loadUniversityData(): Promise<UniversityData[]> {
  try {
    const dataPath = path.join(
      process.cwd(),
      'public',
      'assets',
      'university_data.json'
    );
    const fileContents = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading university data:', error);
    throw new Error('Failed to load university data');
  }
} 