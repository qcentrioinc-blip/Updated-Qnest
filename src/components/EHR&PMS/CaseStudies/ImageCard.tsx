import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';

// --- Interface for an Image Card ---
interface ArticleData {
  id: number;
  date: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

// --- Mock Data ---
const NEW_MOCK_ARTICLES: ArticleData[] = [
  {
    id: 1,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img5.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
  {
    id: 2,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img6.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
  {
    id: 3,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img7.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
  {
    id: 4,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img5.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
  {
    id: 5,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img6.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
  {
    id: 6,
    date: '8 Sep 2025',
    imageSrc: '/EHR-PMS/Blogs/img7.png',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Seduo ut perspiciatis Sed ut perspiciatis Unde',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut, quis ',
  },
];

// --- Sub-Component for a Single Image Card ---
const ArticleCard: React.FC<ArticleData> = ({
  date,
  imageSrc,
  title,
  subtitle,
  description,
}) => {
  const ASPECT_RATIO_STYLE = { aspectRatio: '405.5 / 317.9535827636719' };
  const FALLBACK_WIDTH = 405;
  const FALLBACK_HEIGHT = 318;

  return (
    <div className="flex flex-col w-full">
      <P className="text-gray-600 mb-2 text-sm">{date}</P>
      <H3 className="text-xl font-semibold leading-tight mb-4">{subtitle}</H3>
      <P className="text-gray-700 mb-4">{description}</P>

      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={ASPECT_RATIO_STYLE}
      >
        <img
          src={imageSrc}
          alt={title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/${FALLBACK_WIDTH}x${FALLBACK_HEIGHT}/cccccc/333333?text=Image`;
          }}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

// --- Main Component ---
const ImageCard: React.FC = () => {
  return (
    <section className="py-10 ">
      {/* ✅ Gradient Heading at the Top of the Entire Section */}
      <div className="mb-10 sm:mb-12 lg:mb-16 text-left px-10 sm:px-4 md:px-18 lg:px-12 xl:px-18 z-20">
        <H2>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #14532d 0%, #ff8c00 100%)',
            }}
          >
            Sed ut perspiciatis
          </span>
        </H2>
        <H2 className="mt-1">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #14532d 0%, #ff8c00 100%)',
            }}
          >
            Sedvo ut perspiciatis
          </span>
        </H2>
      </div>

      {/* Inner Container */}
      <div className="max-w-8xl mx-10">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEW_MOCK_ARTICLES.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
