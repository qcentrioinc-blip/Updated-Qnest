import React from 'react';
import { H2, H4, P } from '../../../styles/Typography';

// Define the structure for a job data object
interface Job {
  id: string;
  title: string;
  location: string;
  experience: string;
}

// Mock data for the job cards
const MOCK_JOBS: Job[] = [
  { id: 'dev-001', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-002', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-003', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-004', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-005', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-006', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-007', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-008', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
  { id: 'dev-009', title: 'Senior Software Developer', location: 'Holor in reprehenderit in erlands (On Site)', experience: '2-5 Years' },
];

// --- Job Card Component ---

interface JobCardProps {
  job: Job;
  onViewDetails: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails }) => {

  // Function to handle the click and trigger navigation/redirection
  const handleClick = () => {
    onViewDetails(job.id);
  };

  return (
    <div className="
      p-6 bg-white rounded-md shadow-lg
      border border-green-100 hover:shadow-xl transition duration-300 ease-in-out
      flex flex-col justify-between
    ">
      <div>
        {/* Title */}
        <H4 className="text-lg font-semibold text-green-700 mb-2 leading-snug">
          {job.title}
        </H4>
        
        {/* Location/Description */}
        <P className="text-sm text-gray-600 mb-1">
          {job.location}
        </P>
        
        {/* Experience */}
        <P className="text-sm text-gray-600 mb-4">
          {job.experience}
        </P>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px  bg-green-300 my-4" />

      {/* Action Button (Right Arrow) */}
      <div className="flex justify-end">
      <a href='/industries/ehr-and-pms/jobdescription'>
      <button 
        onClick={handleClick}
        aria-label={`View details for ${job.title}`}
        className="
          self-end p-2 rounded-full bg-green-50 transition duration-200
          hover:bg-green-100 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-green-400
        "
      >
        {/* Arrow Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-green-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
      </a>
    </div>
    </div>
  );
};

// --- Main Application Component ---

const JobCardGrid: React.FC = () => {
  
  // This function simulates redirecting to the detail page.
  const handleViewDetails = (jobId: string) => {
    // In a real application, you would use a router here:
    // e.g., navigate(`/jobs/${jobId}`);
    console.log(`Navigating to detail page for Job ID: ${jobId}`);
    // For demonstration, we'll just log an action.
    // alert(`Redirecting to details for Job ID: ${jobId}. (Check console for simulated routing)`);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 sm:p-10 lg:p-20">
      <div className="max-w-7xl mx-auto">
        
        <H2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-10 text-center">
          Current Job Openings
        </H2>

        {/* Responsive Grid Container:
          - Default (mobile): 1 column
          - sm (tablet): 2 columns
          - lg (desktop): 3 columns, matching the image
        */}
        <div className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2 sm:gap-6 
          lg:grid-cols-3 lg:gap-8
        ">
          {MOCK_JOBS.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCardGrid;
