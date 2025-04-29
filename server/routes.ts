import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { parse } from "csv-parse";
import { promises as fs } from "fs";

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

// Sample scholarship data
const sampleScholarships = [
  {
    id: "1",
    title: "Global Leadership Scholarship",
    description: "A prestigious scholarship for future global leaders committed to making a positive impact in water conservation and sustainability.",
    hostCountry: "United States",
    hostOrganization: "Water Conservation Institute",
    eligibility: "Graduate students in Environmental Science or related fields",
    benefits: "Full tuition and living expenses",
    deadline: "2024-12-31",
    applyUrl: "https://example.com/apply",
    officialUrl: "https://example.com/scholarship",
    degree: ["Masters", "PhD"],
    fields: ["Environmental Science", "Sustainability"],
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15"
  },
  {
    id: "2",
    title: "Water Innovation Fellowship",
    description: "Supporting innovative research in water technology and conservation methods for developing regions.",
    hostCountry: "Canada",
    hostOrganization: "Clean Water Foundation",
    eligibility: "Undergraduate and graduate students",
    benefits: "$25,000 annual stipend",
    deadline: "2024-09-30",
    applyUrl: "https://example.com/apply",
    officialUrl: "https://example.com/fellowship",
    degree: ["Bachelors", "Masters"],
    fields: ["Engineering", "Environmental Science"],
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15"
  }
];

// Store scholarships in memory (replace with database in production)
let scholarships = [...sampleScholarships];

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Get all scholarships
  app.get('/api/scholarships', (req, res) => {
    res.json(scholarships);
  });

  // Get single scholarship
  app.get('/api/scholarships/:id', (req, res) => {
    const scholarship = scholarships.find(s => s.id === req.params.id);
    if (!scholarship) {
      return res.status(404).json({ message: 'Scholarship not found' });
    }
    res.json(scholarship);
  });

  // Upload scholarships CSV
  app.post('/api/scholarships/upload', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const fileContent = await fs.readFile(req.file.path, 'utf-8');
      const records: any[] = [];

      // Parse CSV
      const parser = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
      });

      parser.on('readable', function() {
        let record;
        while ((record = parser.read()) !== null) {
          records.push({
            id: String(records.length + 1),
            ...record,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }
      });

      parser.on('end', function() {
        // Update scholarships array
        scholarships = [...scholarships, ...records];
        res.json({ 
          message: `Successfully imported ${records.length} scholarships`,
          count: records.length 
        });
      });

      parser.on('error', function(err) {
        throw err;
      });

      // Clean up uploaded file
      await fs.unlink(req.file.path);

    } catch (error) {
      console.error('Error processing CSV:', error);
      res.status(500).json({ message: 'Error processing CSV file' });
    }
  });

  // Donation API endpoint (this would connect to payment processing in a real application)
  app.post('/api/donate', (req, res) => {
    const { amount, donationType } = req.body;
    
    if (!amount || !donationType) {
      return res.status(400).json({ message: 'Amount and donation type are required' });
    }
    
    // In a real application, this would process the payment
    // For now, we just return a success response
    res.json({ 
      success: true,
      message: `Thank you for your ${donationType} donation of $${amount}.00!`
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
