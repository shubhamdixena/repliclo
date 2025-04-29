import { useRoute } from "wouter";

type ScholarshipDetailParams = {
  [key: string]: string;
  id: string;
};

export default function ScholarshipDetail() {
  const [, params] = useRoute<ScholarshipDetailParams>("/scholarships/:id");
  
  if (!params?.id) {
    return <div>Scholarship not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Scholarship Details</h1>
      <p>Viewing scholarship with ID: {params.id}</p>
      {/* TODO: Add scholarship details fetching and display logic */}
    </div>
  );
} 