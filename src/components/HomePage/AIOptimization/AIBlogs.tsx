import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H2, H4, P } from "../../../styles/Typography";

const blogs = [
  {
    id: 1,
    tag: "AI Blogs",
    title: "CloudDIET uncovers savings others miss.",
    description:
      "Discover how AI identifies hidden cloud waste and helps organizations reduce Azure costs efficiently.",
    image: "/AI-CloudFinOps/HomePage/GroupPeople.webp",
  },
  {
    id: 2,
    tag: "Tech Blogs",
    title: "Accelerating Financial Modeling with Our AI.",
    description:
      "Learn how intelligent automation speeds up financial planning with greater accuracy and insights.",
    image: "/AI-CloudFinOps/HomePage/Blog2.webp",
  },
  {
    id: 3,
    tag: "Solutions Blogs",
    title: "CloudDIET profiler to authenticate to Azure.",
    description:
      "Understand how CloudDIET securely authenticates with Azure to analyze usage and optimize cloud spending.",
    image: "/AI-CloudFinOps/HomePage/Blog1.webp",
  },
];

// Added the missing component declaration
const AIBlogs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white text-black pt-16 pb-16">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        {/* GRID: Stacks on mobile, side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[420px_1fr] gap-6 sm:gap-16 lg:gap-20 xl:gap-24">
          
          {/* ========== LEFT COLUMN ========== */}
          <div className="flex flex-col justify-between gap-2 lg:gap-0 xl:gap-0">
            {/* Main Heading */}
            <div>
              <H2 className="text-[#009565]">
                <span className="lg:hidden">Stay Ahead with Cloud Insights</span>

                <span className="hidden lg:block">
                  Stay Ahead with
                  <br />
                  Cloud Insights
                </span>
              </H2>
            </div>

            {/* Bottom Section */}
            <div className="space-y-5 sm:space-y-8 xl:space-y-6">
              <div className="flex items-center justify-between lg:block">
                <H2>Our Resources</H2>

                <a
                  href="/industries/ai-optimization/resources/whyclouddiet/clouddiet"
                  className="lg:hidden"
                >
                  <button
                    className="
                      h-[38px]
                      px-5
                      rounded-lg
                      bg-[#009565]
                      text-white
                      hover:bg-[#056735]
                      transition
                    "
                  >
                    View All
                  </button>
                </a>
              </div>

              {/* Desktop Button */}
              <a
                href="/industries/ai-optimization/resources/whyclouddiet/clouddiet"
                className="hidden lg:inline-block"
              >
                <button
                  className="
                    h-[38px]
                    px-5
                    rounded-lg
                    bg-[#009565]
                    text-white
                    hover:bg-[#056735]
                    transition
                  "
                >
                  View All
                </button>
              </a>
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="flex flex-col">
            {/* Top Description */}
            <P className="text-[16px]">
              Explore expert articles on Azure optimization, FinOps best practices, and real-world savings strategies. Learn how CloudDIET's AI-driven profiling and advanced cost intelligence help reduce waste and maximize your cloud ROI.
            </P>

            {/* Divider */}
            <div className="mt-4 h-[0.5px] w-full bg-[#009565]" />

            {/* Mobile Header */}
            <div className="flex md:hidden justify-end gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[#009565] flex items-center justify-center hover:bg-[#009565] hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[#009565] flex items-center justify-center hover:bg-[#009565] hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Mobile Slider */}
            <div
              ref={scrollRef}
              className="
                md:hidden
                mt-6
                flex
                gap-5
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                scrollbar-hide
                pb-2
              "
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="min-w-[250px] w-[250px] flex-shrink-0"
                >
                  <div className="relative overflow-hidden rounded-[4px] h-[200px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 57%, #000 95%)",
                      }}
                    />
                  </div>

                  <div className="mt-4">
                    <H4>{blog.title}</H4>

                    <P className="mt-3 text-[14px] leading-6 text-[#555] line-clamp-3">
                      {blog.description}
                    </P>

                    <a href="/industries/ai-optimization/resources/whyclouddiet/clouddiet">
                      <button className="inline-flex items-center gap-2 mt-3 text-[#009565] font-bold">
                        Read Now
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 3L11 8L6 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid mt-8 grid-cols-3">
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`flex flex-col md:pr-5 lg:pr-8 xl:pr-4 ${
                    index > 0
                      ? "md:pl-5 lg:pl-8 xl:pl-4 md:border-l md:border-[#5551FF]/50"
                      : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[8px] h-[120px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0 rounded-[8px]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 57%, #000 95%)",
                      }}
                    />
                  </div>

                  <div className="mt-2 flex flex-col justify-between min-h-[165px]">
                    <H4>{blog.title}</H4>

                    <P className=" text-[14px] leading-6 text-[#555] line-clamp-3">
                      {blog.description}
                    </P>

                    <a href="/industries/ai-optimization/resources/whyclouddiet/clouddiet">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 self-start mt-3 text-[#009565] font-bold"
                      >
                        Read Now
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 3L11 8L6 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBlogs;