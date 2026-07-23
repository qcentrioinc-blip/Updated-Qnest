import { useState } from "react";
import {   H3, P } from "../../../styles/Typography";
 
// import linkedinLogo from "/AboutUs/HighLinkedin.png";
// import xLogo from "/AboutUs/HighXLogo.png";
import { ContactUsHighYellow } from "../../../styles/Button";
const Content = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const tableOfContents = [
    { id: "overview", label: "Advanced Strategies in Data Center Consulting" },
    { id: "optimization", label: "Evaluating the Impact of Data Center Consulting" },
    { id: "security", label: "Future Trends in Data Center Consulting" },
    { id: "trends", label: "How AI Can Helps" },
  ];

  return (
    <section className="relative  bg-[#0c0c0c] text-white py-10 lg:py-20 ">
   

      <div className="  max-w-8xl lg:mx-10 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-12  gap-10 xl:gap-20">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8 space-y-12">
            {/* Introduction */}
            <div>
              <P className="text-gray-300 leading-snug mb-6">
                Data centers are complex ecosystems that require expert management to deliver optimal 
                performance, efficiency, and security.
              </P>
              <P className="text-gray-300 leading-snug mb-6">
                Our team ensures the optimization of every aspect along across your data. By leveraging the 
                knowledge and comprehensive understanding, we streamline your operations for data centres from 
                location and design assessment to time strategies to scale.
              </P>
              <P className="text-gray-300 leading-snug">
                In this blog, we'll dive deep into the crucial of data center consulting. We'll explore advanced strategies, 
                including the latest trends in infrastructure, AI-driven operations, and best practices for ensuring optimum 
                uptime and operational efficiency.
              </P>
            </div>

            {/* Advanced Strategies Section */}
            <div id="overview">
              <h2 className=" text-3xl   font-semibold mb-6">
                Advanced Strategies in Data Center Consulting
              </h2>
              <P className="text-gray-300 leading-snug mb-6">
                The field of data center management is constantly evolving. What worked yesterday might not be 
                enough for tomorrow's challenges. Future-proof solutions backed by cutting-edge strategies ensure that 
                your data center can scale, adapt, and thrive in a dynamic technological landscape.
              </P>
              
            
              <P className="text-gray-300 leading-snug mb-4">
                According to Research 2030(source)
              </P>
              <P className="text-gray-300 leading-snug mb-8">
                With Artificial intelligence (AI) and data center management are two iconic. AI, with its capability, 
                contributes to enable real-time insights and optimize data operations. Managers expert consultants, we 
                apply AI-driven solutions that Identify latency, streamline network congestion & align with NVIDIA's 
                recent trends in AI innovation to help businesses and stay ahead.
              </P>

              {/* Highlighted Box */}
              
               
                <div className="flex justify-center mt-6">
                  {/* <img 
                    src="/AboutUs/ResourceDetailPic.png" 
                    alt="Virtualization illustration" 
                    className="w-full rounded-md h-auto"
                  /> */}
               
              </div>
            </div>

            {/* Second Section */}
            <div>
              <P className="text-gray-300 leading-snug mb-6">
                Data centers are complex ecosystems that require expert management to deliver optimal performance, efficiency, and reliability.
              </P>
              <P className="text-gray-300 leading-snug mb-6">
               As technology evolves, the expert consulting comes into play. By leveraging the knowledge and experience of seasoned professionals, organizations can transform their data centers from cost centers into strategic assets that drive business growth.
              </P>
              <P className="text-gray-300 leading-snug">
                n this blog, we'll dive deep into the world of data center consulting. We'll explore advanced strategies, evaluate the impact of consulting engagements, and look at future trends shaping the industry. Can be the expert consultant for your data center. Book a call with us to learn how we can help.
              </P>
            </div>

            {/* Second Advanced Strategies Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 " id="optimization">
                Advanced Strategies in Data Center Consulting
              </h2>
              <P className="text-gray-300 leading-snug mb-6">
                The field of data center management is constantly evolving. What worked yesterday might not be 
                enough for tomorrow's challenges. Future-proof solutions backed by cutting-edge strategies ensure that 
                your data center can scale, adapt, and thrive in a dynamic technological landscape.
              </P>
              
             
              <P className="text-gray-300 leading-snug mb-4">
                According to Research 2030(source)
              </P>
              <P className="text-gray-300 leading-snug mb-8">
                With Artificial intelligence (AI) and data center management are two iconic. AI, with its capability, 
                contributes to enable real-time insights and optimize data operations. Managers expert consultants, we 
                apply AI-driven solutions that Identify latency, streamline network congestion & align with NVIDIA's 
                recent trends in AI innovation to help businesses and stay ahead.
              </P>

              {/* Second Highlighted Box */}
             {/* <img 
                    src="/AboutUs/ResourceDetailPic.png" 
                    alt="Virtualization illustration" 
                    className="w-full rounded-md h-auto"
                  /> */}
            </div>
          </div>

          {/* Table of Contents - Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20">
              <H3 className=" text-[#F99526]  mb-6">Table of contents</H3>
              <nav className="space-y-6 border-l-2 border-[#F99526] pl-4">
                {tableOfContents.map((item) => (
                 <a
  key={item.id}
  href={`#${item.id}`}
  onClick={(e) => {
    e.preventDefault();
    setActiveSection(item.id);
    const target = document.getElementById(item.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy(0, -32);
    }
  }}
  className={`block text-sm transition-colors ${
    activeSection === item.id
      ? "text-[#F99526] font-medium"
      : "text-gray-400 hover:text-white"
  }`}
>
  {item.label}
</a>

                ))}
              </nav>

              {/* Share Article Section */}
              <div className="mt-4 pt-6 border-t-2 border-[#CCCCCC] ">
              <ContactUsHighYellow>BOOK A FREE DEMO</ContactUsHighYellow>
              </div>

              {/* Social Icons */}
             <div className="mt-2 space-x-4 flex flex-row  items-center ">
            <p className="text-[#CCCCCC] pl-2 font-light">Share Article</p>
            <div className="flex items-center  gap-2">
              {/* <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8  cursor-pointer hover:opacity-80" />
              <img src={xLogo} alt="X" className="w-8 h-8 cursor-pointer hover:opacity-80" /> */}
            </div>
          </div>
              </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;