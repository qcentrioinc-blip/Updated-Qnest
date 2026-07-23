import React from "react";
import { ArrowUpRight } from "lucide-react";
// The original import for H2 could not be resolved, so we are stubbing it for runnability.
// If this component exists in your local environment, you can re-add the original import:
import { H2 } from "../../../styles/Typography";
import { Link } from "react-router-dom";
// const H2 = ({ children, className }) => (
//   <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>
// );

const TitleSec: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-r from-[#E6FFEF] to-[#C8FFD7] flex items-center justify-center py-10 px-4 top-15">
            {/* Changed lg:grid-cols-3 to lg:grid-cols-2 for a 50/50 split on large screens */}
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-10">

                {/* --- LEFT: FORM (50% width on large screens) --- */}
                {/* Changed lg:col-span-2 to lg:col-span-1 */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    {/* Changed max-w-2xl to max-w-full to utilize the new, larger column width */}
                    <div className="bg-white shadow-md rounded-2xl p-8 sm:p-10 lg:p-12 w-full max-w-3xl">
                        {/* Using the stubbed H2 component */}
                        <H2 className="text-green-900 mb-6 text-center lg:text-left">
                            Qertyu oiuyt rfvu poiy bal
                        </H2>

                        <form className="space-y-5">
                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-green-700 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"    
                                    placeholder="Email"
                                    className="w-full border border-green-700 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div className="flex justify-between items-center border border-green-700 rounded-lg px-4 py-3">
                                <span className="text-gray-500">Resume</span>
                                <label
                                    htmlFor="resumeUpload"
                                    className="bg-green-100 text-green-700 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-green-200 transition duration-150"
                                >
                                    Upload
                                </label>
                                <input type="file" id="resumeUpload" className="hidden" />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Tell us about yourself"
                                    rows={4}
                                    className="w-full border border-green-700 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <Link to="/industries/ehr-and-pms">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
                            >
                                CONTACT US <ArrowUpRight size={18} />
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>

                {/* --- RIGHT: IMAGE (50% width on large screens) --- */}
                {/* This column implicitly takes lg:col-span-1 */}
                <div className="relative flex justify-center lg:justify-end items-center">
                    <div className="w-full flex justify-center">
                        <img
                            src="/EHR-PMS/ContactForm/shape1.png"
                            alt="Application form illustration"
                            className="
        w-[90%]
        sm:w-[85%]
        md:w-[80%]
        lg:w-[100%] /* Uses full width of its 50% column */
        max-w-[1000px]
        h-auto
        object-contain
       "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TitleSec;
