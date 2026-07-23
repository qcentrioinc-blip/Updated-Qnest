import React from 'react';
import { H2 } from '../../../styles/Typography';

type Category = 'Case studies' | 'Blogs' | 'News/press Release' | 'Whitepapers';

interface BlogHeadProps {
  activeCategory: Category;
  setActiveCategory: (value: Category) => void;
}

const BlogHead: React.FC<BlogHeadProps> = ({ activeCategory, setActiveCategory }) => {
  const activeGradient = 'bg-gradient-to-r from-[#F99526] to-[#8338EC]';

  const renderButton = (category: Category) => {
    const isActive = activeCategory === category;

    const baseClasses =
      'w-full sm:w-auto px-10 py-3 text-lg font-light font-quadran   transition duration-300 transform hover:scale-[1.02] shadow-lg';

    const dynamicClasses = isActive
      ? `rounded-full px-10 text-white ${activeGradient}`
      : `rounded-full border border-white text-white bg-transparent hover:bg-white/10`;

    return (
      <button
        key={category}
        type="button"
        className={`${baseClasses} ${dynamicClasses}`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    );
  };

  return (
    <header className="w-full overflow-hidden bg-black text-white">
      <div className="relative z-10 max-w-8xl lg:mx-10 py-6 md:py-16 px-4">
        <div className="pb-20 text-center flex flex-col">
          <H2 className="mb-2">Sed ut perspiciatis</H2>
          <h2 className="text-2xl md:text-4xl playfair italic text-[#F99526]">
            Unde Sedwo ut perspiciatis
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-4">
          {renderButton('Case studies')}
          {renderButton('Blogs')}
          {renderButton('News/press Release')}
          {renderButton('Whitepapers')}
        </div>
      </div>
    </header>
  );
};

export default BlogHead;
