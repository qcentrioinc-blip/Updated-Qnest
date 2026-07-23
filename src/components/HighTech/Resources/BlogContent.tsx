import { ArrowRight } from "lucide-react";
import {  H4 } from "../../../styles/Typography";
import { Link } from "react-router-dom";

 

interface BlogContentProps {
  activeCategory: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ activeCategory }) => {
  const blogPosts = [
    {
      id: 1,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 2,
      date: '12 Oct 2025',
      category: 'Case studies',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 3,
      date: '12 Oct 2025',
      category: 'News/press Release',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 4,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 5,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 6,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 7,
      date: '12 Oct 2025',
      category: 'Case studies',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 8,
      date: '12 Oct 2025',
      category: 'Whitepapers',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 9,
      date: '12 Oct 2025',
      category: 'Case studies',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 10,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 11,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 12,
      date: '12 Oct 2025',
      category: 'Blogs',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 13,
      date: '12 Oct 2025',
      category: 'Case studies',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 14,
      date: '12 Oct 2025',
      category: 'Whitepapers',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    },
    {
      id: 15,
      date: '12 Oct 2025',
      category: 'Case studies',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'We onboard users from 126+ countries — whether you hold a passport or a'
    }
  ];
const filteredPosts = blogPosts.filter(
    (post) => post.category === activeCategory
  );
  return (
  <div className="min-h-screen bg-black pt-6 xl:pt-10 pb-20 px-4">
      <div className="max-w-8xl lg:mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
             
            
              {/* Content Container */}
              <div className="p-6 ">
                {/* Date and Category */}
                <div className="flex  font-quadran    justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm border-1 border-gray-700 px-4 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <H4 className="  text-gray-900   leading-tight">
                  {post.title}
                </H4>
              </div>
             <div className="flex justify-end items-start pr-4 pb-4">
  <Link
    to="/industries/high-tech/resources-detail"
    className="text-blue-800 font-quadran   font-medium relative group flex items-center gap-1"
  >
    <span>Read More</span>
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      <ArrowRight />
    </span>
    {/* Underline animation */}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;