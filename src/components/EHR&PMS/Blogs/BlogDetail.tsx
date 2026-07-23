 
import { BLOGS } from "./data/blogs";
import { H2, H3, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";
import { useState } from "react";
import EHRNavbar from "../Navbar/EHRNavbar";
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter";
// import ReactMarkdown from "react-markdown";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";



const BlogDetail = () => {
  const { slug } = useParams();
 const [drawerOpen, setDrawerOpen] = useState(false);
const navigate = useNavigate();
useEffect(() => {
  window.scrollTo(0, 0);
}, [slug]);
const currentIndex = BLOGS.findIndex(b => b.slug === slug);

const previousBlog =
  currentIndex > 0 ? BLOGS[currentIndex - 1] : null;

const nextBlog =
  currentIndex < BLOGS.length - 1
    ? BLOGS[currentIndex + 1]
    : null;

  const blog = BLOGS.find(b => b.slug === slug);

  if (!blog) {
    return <div className="text-black p-10">Blog not found</div>;
  }

  return (
    <>
    <EHRNavbar/>
    <section className="bg-[#ffffff] px-6 md:mt-20 mt-10 xl:px-6 lg:mt-32 text-[#000000] py-10">
       <div className="max-w-7xl mx-auto">
        <H2 className=" font-semibold ">
            {blog.subtitle}
          </H2>

          {/* Meta Row */}
          <div className="flex font-quicksand  text-sm pt-6 pb-2 flex-row  space-x-4 xl:space-x-32 ">
            <span>By {blog.author}</span>
<span> {blog.date}</span>
           
            <span>{blog.readTime}</span>
          </div>

          {/* Hero Image */}
          <img  
            src={blog.heroImage}
            alt={blog.subtitle}
            className="w-full rounded-md"
          />

          </div>
      <div className="max-w-7xl mx-auto px-4 xl-px-0 grid xl:grid-cols-12 pt-10 gap-10">

        {/* LEFT CONTENT */}
        <div className="xl:col-span-8 space-y-8">

        
          {/* Intro Paragraphs */}
          {blog.intro.map((para, index) => (
            <P  key={index} className="text-black  leading-normal  ">
              {para}
            </P >
          ))}

          {blog.sections.map(section => (
            <div key={section.id} id={section.id}  className="scroll-mt-32">
              
              {section.heading && (
                <H3 className="text-3xl font-semibold mb-6">
                  {section.heading}
                </H3>
              )}

              {section.paragraphs?.map((para, index) => (
                <P
                  key={index}
                  className=" leading-snug "
                >
                  {para}
                </P>
              ))}
{/* {section.paragraphs?.map((p, i) => (
  <ReactMarkdown key={i}>
    {p}
  </ReactMarkdown>
))} */}
              {section.listItems?.map((item, index) => (
  <div key={index} className="mt-6">
    <H4 className="text-2xl font-semibold mb-3">
      {item.title}
    </H4>

    {item.paragraphs.map((para, i) => (
      <P key={i} className="leading-snug mb-3">
        {para}
      </P>
    ))}
  </div>
))}


              {section.image && (
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full rounded-md"
                />
              )}
              
              {section.features?.map((item, index) => (
  <P key={index} className="my-2">
    <strong>{item.title}</strong> {item.description}
  </P>
))}



            </div>
          ))}
          {blog.cta && (
  <div className="bg-[#F5F7F7] p-8 rounded-lg mt-16">
    <H3 className="text-2xl font-semibold mb-4">
      {blog.cta.title}
    </H3>
    <P className="mb-6">{blog.cta.description}</P>
    <button 
     onClick={() => setDrawerOpen(true)}
    className="bg-[#00AA72] font-quadran   text-white px-6 py-3 rounded-md">
      Request Demo
    </button>
  </div>
)}
{blog.faqs && (
  <div className="mt-16">
    <H3 className="text-2xl font-semibold mb-6">FAQs</H3>

    {blog.faqs.map((faq, index) => (
      <div key={index} className="mb-6">
        <H4 className="text-xl font-semibold mb-2">
          {faq.question}
        </H4>
        <P>{faq.answer}</P>
      </div>
      
    ))}

    <div className="flex justify-between items-center mt-16   pt-8">
  
  {/* Previous */}
  {previousBlog ? (
    <button
      onClick={() => navigate(`/blogs/${previousBlog.slug}`)}
      className="flex items-center space-x-2 text-[#00AA72] "
    >
      <span className=" "><ArrowLeft/></span>
      <span className="text-left">
        <div className=" font-quicksand text-lg text-gray-700 font-bold hover:text-[#00AA72]">Previous</div>
        {/* <div className="font-semibold">{previousBlog.subtitle}</div> */}
      </span>
    </button>
  ) : <div />}

  {/* Next */}
  {nextBlog ? ( 
    <button
      onClick={() => navigate(`/blogs/${nextBlog.slug}`)}
      className="flex items-center space-x-2 text-[#00AA72]  text-right"
    >
      <span className="text-right">
        <div className=" font-quicksand text-lg text-gray-700 font-bold hover:text-[#00AA72]">Next</div>
        {/* <div className="font-semibold">{nextBlog.subtitle}</div> */}
      </span>
      <span className=" "><ArrowRight/></span>
    </button>
  ) : <div />}
  
</div>

    <hr className="w-full h-2"/>
    <h5 className=" font-quadran    text-lg font-bold mt-6 mb-3">
  {blog.metaTitle}
</h5  >

<P className="text-gray-600 mb-6">
  {blog.metaDescription}
</P>
<H4 className="text-black mb-4">Quick Summary:</H4>
<P className="text-gray-600 mb-6">{blog.quickSummary}</P>

{blog.keyTakeaways && (
  <div className="mb-8">
    <H4 className="text-xl font-semibold mb-4">
      Key Takeaways
    </H4>

    <ul className="list-disc font-quicksand text-[18px] pl-6 text-gray-600 space-y-1 ">
      {blog.keyTakeaways.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)}

  </div>
)}


        </div>

        {/* RIGHT SIDEBAR (TOC) */}
   <div className="xl:col-span-4 self-start sticky top-20 h-fit">

          <H3 className="text-black mb-6">
            Table of Contents
          </H3>

          <nav className="space-y-6 border-l-2 border-black pl-4">
            {blog.sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-[18px] font-quicksand text-black hover:text-[#00AA72]"
              >
                {section.heading || "Introduction"}
                
              </a>  
            ))}
          </nav>
        </div>

      </div>
       <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
    <EHRFooter />
    </>
  );
};

export default BlogDetail;
