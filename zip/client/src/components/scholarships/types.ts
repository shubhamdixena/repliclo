export interface Scholarship {
  id: string;
  title: string;
  description: string;
  hostCountry: string;
  hostOrganization: string;
  eligibility: string;
  benefits: string;
  deadline: string;
  applyUrl: string;
  officialUrl: string;
  degree: string[];
  fields: string[];
  createdAt: string;
  updatedAt: string;
}

export type ScholarshipFilters = {
  search: string;
  countries: string[];
  degrees: string[];
  fields: string[];
  deadline: Date | null;
}

export type SortConfig = {
  key: keyof Scholarship;
  direction: 'asc' | 'desc';
} 