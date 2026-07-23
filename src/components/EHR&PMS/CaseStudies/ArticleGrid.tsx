import React from 'react';
import { H3, P } from '../../../styles/Typography';

// --- Interface and Mock Data ---

interface Article {
  id: number;
  date: string;
  imageSrc: string;
  title: string;
  description: string;
}

// Using the latest MOCK_ARTICLES data from image_sources.ts
const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img1.png',
    title: 'Sed ut perspiciatis Unde Sedvo ut',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img2.png',
    title: 'Sed ut perspiciatis Unde Sedvo ut',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img3.png',
    title: 'Sed ut perspiciatis Unde Sedvo ut',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img4.png',
    title: 'Sed ut perspiciatis Unde Sedvo ut',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

// The original fixed dimensions are now used as min/max constraints for larger screens
const IMAGE_WIDTH_PX = 220;
const IMAGE_HEIGHT_PX = 200;

// --- Sub-Component for a Single Article Card ---

const ArticleCard: React.FC<Article> = ({ date, imageSrc, title, description }) => {
  return (
    <div 
      // Responsive padding/margin and white background with shadow
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      role="article"
    >
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        
        {/* Image Container: 
          - On mobile (default), it takes full width (w-full) of the card, shrinking proportionally.
          - On sm screens and up, it reverts to the requested fixed width (w-[220px]) 
            and min-height (min-h-[200px]) to maintain the desktop layout.
        */}
        <div 
          className="flex-shrink-0 mb-4 sm:mb-0 w-full sm:w-[220px]" 
          style={{ minHeight: '100px', maxHeight: '100vw' }} // Minimum height for readability on mobile
        >
          <img
            src={imageSrc}
            alt={title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Fallback image using the requested dimensions for large screens, but scaling on mobile
              target.src = `https://placehold.co/${IMAGE_WIDTH_PX}x${IMAGE_HEIGHT_PX}/cccccc/333333?text=Image`;
            }}
            // **h-auto ensures proportional scaling**
            className="w-full h-auto object-cover rounded-lg aspect-[11/10] sm:h-[200px]" 
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow">
          <P className=" mb-2">
            {date}
          </P>
          <H3 className=" mb-8">
            {title}
          </H3>
          <P className="">
            {description}
          </P>
        </div>
      </div>
    </div>
  );
};


// --- Main Blog Article Grid Component ---

const ArticleGrid: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 bg-[#E5FFEC]">
      <div className="max-w-8xl mx-10 ">
        
        {/* Section Title with Gradient
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <H2 className="text-center">
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(90deg, #14532d 0%, #ff8c00 100%)' // Green to Orange gradient
              }}
            >
              Sed ut perspiciatis Unde
            </span>
          </H2>
          <H3 className="text-center mt-1">
            <span
               className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #14532d 0%, #ff8c00 100%)' 
              }}
            >
              Sedvo ut perspiciatis
            </span>
          </H3>
        </div> */}

        {/* Article Grid Layout */}
        <div 
          // Responsive Grid: 1 column on mobile, 2 columns on tablet/desktop
          className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
        >
          {MOCK_ARTICLES.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ArticleGrid;
