"use client";
import { ArrowUpRight } from "lucide-react";
import { H1, P } from "../../../styles/Typography";
import { Link } from "react-router-dom";

const ContactFormSection = () => {
  return (
    <section className="w-full bg-white py-24 px-4 mt-10 flex items-center" id="contactForm">
      <div className="max-w-8xl mx-10 flex flex-col md:flex-row items-start justify-between gap-20 w-full">
        {/* Left side - Form */}
        <div className="flex-1 w-full md:w-1/2">
          <form className="space-y-10">
            {/* Name */}
            <div>
              <label className="block text-xl font-extrabold font-quadran   mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-lg pb-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl font-extrabold  font-quadran   mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black text-lg pb-2"
              />
            </div>

            {/* Resume (right-aligned upload) */}
            <div>
              <label className="block text-xl font-extrabold font-quadran   mb-2">
                Resume
              </label>
              <div className="relative w-full border-b border-gray-300 pb-2">
                <input
                  type="file"
                  id="resume"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-base text-gray-600">No file chosen</span>
                <label
                  htmlFor="resume"
                  className="absolute bg-orange-100 hover:bg-orange-200 px-4 py-1  rounded-full right-0 top-0 text-[#F99526] font-semibold cursor-pointer text-base"
                >
                  Upload
                </label>
              </div>
            </div>

            {/* Radio Options */}
            <div>
              <p className="mb-4 text-xl font-extrabold font-quadran    text-gray-800">
                Are you an immediate joiner
              </p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 text-gray-700 text-base">
                  <input
                    type="radio"
                    name="joiner"
                    className="form-radio text-gray-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-3 text-gray-700 text-base">
                  <input
                    type="radio"
                    name="joiner"
                    className="form-radio text-gray-600"
                  />
                  <span>No</span>
                </label>
                <label className="flex items-center space-x-3 text-gray-700 text-base">
                  <input
                    type="radio"
                    name="joiner"
                    className="form-radio text-gray-600"
                  />
                  <span>Serving notice period</span>
                </label>
              </div>
            </div>

            {/* Contact Us Button */}
            <Link to="/industries/high-tech">
            <button
              type="button"
              className="flex items-center gap-3 bg-[#F99526] text-black font-semibold text-lg px-6 py-2 rounded-md hover:bg-[#e98413] transition"
            >
              Submit
              <ArrowUpRight className="w-5 h-5" />
            </button>
            </Link>
          </form>
        </div>

        {/* Right side - Text */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center">
          <H1 className="mb-8 leading-tight text-4xl md:text-5xl">
            Sed ut perspiciatis{" "}
            <span className="italic text-[#F99526] font-semibold">
              unde omnis iste natus
            </span>
          </H1>
          <P className="max-w-lg text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. occaecat cupidatat non.
          </P>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
