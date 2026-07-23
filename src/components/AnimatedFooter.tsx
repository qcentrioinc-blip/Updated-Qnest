"use client";

import { useState } from "react";
import { H4, P } from "../styles/Typography";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function AnimatedFooter() {
  const [email, setEmail] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-[#141414]");

  const isFullyValidEmail = (value: string) => {
    return /^[^\s@]+@[a-zA-Z]+\.(com|in|net|org|co|io)$/.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (isFullyValidEmail(value)) {
      setButtonColor("bg-[#6B6B6B]");
    } else {
      setButtonColor("bg-[#8C8C8C]");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFullyValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Subscribed successfully");
    setEmail("");
    setButtonColor("bg-[#8C8C8C]");
  };

  return (
    <footer className="bg-white dark:bg-black dark:text-white text-black py-4">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Top Section */}
        <div className="mb-4 max-w-sm">
          {/* <img
            src="/QnestLogo.svg"
            alt="Logo"
            className="h-10 mb-2"
          /> */}
          {/* <P className="text-sm leading-relaxed ">
            We are more than a technology provider; we are your strategic partner in progress.
          </P> */}
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-300 mb-12"></div> */}

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Industries */}
          <div>
            <H4 className=" mb-4 ">
              Industries
            </H4>
            <ul className="space-y-2 text-md font-quicksand">
              {/* <li className="hover:underline cursor-pointer">High Tech</li> */}
              <a href="/industries/cloud-finops-ai" target="_blank"><li className="mb-3  hover:underline ">Cloud Finops AI</li></a>
              <a href="/industries/banking-and-finance" target="_blank"><li className="mb-3  hover:underline ">Banking and Finance</li></a>
           <a href="/industries/ehr-and-pms" target="_blank"><li className="mb-3  hover:underline ">EHR-PMS</li></a>
               {/* <a href="/comingsoon" target="_blank"><li className="mb-3  hover:underline ">High Tech</li></a> */}
              
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <H4 className=" mb-4">Quick Links</H4>
            <ul className="space-y-3 font-quicksand  text-sm">
              {/* <li>
                <a
                  href="/platform"
                  className="inline-block  hover:underline"
                >
                  Platform
                </a>
              </li> */}

              <li>
                <Link
                  to="/marketplaceglobal"
                  className="inline-block hover:text-black hover:underline font-quicksand "
                >
                  Marketplace
                </Link>
              </li>
            </ul>

          </div>

          {/* Contact Sales */}
          <div>
            <H4 className="text-sm  font-semibold mb-4 ">
              Contact Sales
            </H4>
            <ul className="space-y-2 text-sm font-quicksand">
              <li>sales@qnestglobal.com</li>
              {/* <li>040-7418529630</li> */}
            </ul>
          </div>

          {/* Stay Up to date */}
          <div>
            <H4 className="text-sm font-semibold mb-4 ">
              Stay Up to date
            </H4>
            <P className="text-sm  mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </P>

            <form onSubmit={handleSubmit} className="flex flex-col xl:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="flex-0 px-4 py-2 text-sm rounded-md border border-[#141414] bg-transparent focus:outline-none"
              />

              <button
                type="submit"
                className={`${buttonColor} text-white px-5 py-2 cursor-pointer rounded-md text-sm transition duration-300`}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between font-quicksand items-center text-sm   border-t border-gray-300 pt-6">
          <span>2025 Qnest. All rights reserved</span>

          <div className="flex gap-6 mt-4 md:mt-0">
            {/* <span className="hover:underline cursor-pointer">Security Policy</span> */}
            {/* <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of service</span>
            <span className="hover:underline cursor-pointer">Cookie Policy</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}