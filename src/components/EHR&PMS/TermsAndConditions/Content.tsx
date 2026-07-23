import React from "react";
import { H2, H3, P } from "../../../styles/Typography";

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50   py-16 px-4 md:px-16 lg:px-32 mt-4 lg:pt-32">
      {/* Page Heading */}
      <H2 className=" text-gray-900  mb-8">
        Terms And Conditions
      </H2>

      {/* Updated Date */}
      <P className=" text-gray-500 mb-6">
        Updated as of February 1, 2026
      </P>

      {/* Introduction */}
      <P className="mb-4 text-gray-700 leading-relaxed">
        This Privacy Policy explains how QNEST, and its subsidiaries (“QNEST”, “we”, “our”, and “us”) may collect, use, secure and disclose information that personally identifies you (“Personal Information”). It also describes your choices regarding use, access and correction of your Personal Information. Such Personal Information may include, but is not limited to, your name, phone number, street address, and email address.
      </P>

      <P className="mb-4 text-gray-700 leading-relaxed">
        Kaneriko Software is committed to respecting your privacy rights when you provide such information or visit any of the Kaneriko Software web sites (collectively, the “Site”), such as this one. To protect your Personal Information, Kaneriko Software has created the guidelines outlined below. Understanding that Internet technologies are rapidly evolving, any changes to this policy will be promptly posted on this page, with an updated “effective date” posted at the end of this policy. By accessing our Site or otherwise providing your Personal Information to us, you agree to and consent to be bound by the terms and conditions of this Privacy Policy.
      </P>

      {/* Sections */}
      <section className="mt-6 space-y-6">
        <H3 className=" text-gray-800 ">Information Collected</H3>
        <P className="text-gray-700 leading-relaxed">
          We collect the following categories of Personal Information from you in connection with our products/solutions and services. Personal Information in certain categories may overlap with other categories:
        </P>
        <ul className="list-disc  font-quicksand text-[18px] list-inside  text-gray-700 space-y-1">
          <li>Identifiers, such as your real name, account name, Internet Protocol address, email address, and other similar identifiers.</li>
          <li>Personal Information categories listed in the California Consumer Records statute, including physical address, telephone number, and financial information used to process payment.</li>
          <li>Characteristics of protected classifications under California or federal law, such as your gender and age, but only for Kaneriko Software employees or applicants for employment.</li>
          <li>Commercial information, such as the records of products/solutions and services purchased, obtained, and considered from Kaneriko Software.</li>
          <li>Internet or other electronic network activity information, such as information concerning your interaction with our Site.</li>
          <li>Geolocation data, such as address information reproduced to locate us.</li>
          <li>Social contact, such as audio information for required production support interactions.</li>
          <li>Professional or employment-related information, such as your current or past job history.</li>
          <li>Inferences drawn from other Personal Information, such as your work in a particular industry.</li>
        </ul>
      </section>

      <section className="mt-6 space-y-6">
        <H3 className=" text-gray-800 ">How Information is Used</H3>
        <P className="text-gray-700 leading-relaxed">
          You may provide Personal Information to Kaneriko Software in a variety of ways. While visiting the Site, we may ask you to register and/or provide Personal Information for purposes of interacting with the Site. As other examples, Kaneriko Software may receive Personal Information when you:
        </P>
        <ul className="list-disc font-quicksand text-[18px]  list-inside  text-gray-700 space-y-1">
          <li>Provide or update licensing or account information.</li>
          <li>Register for or attend Kaneriko Software-hosted or sponsored promotions and events (such as conferences, tradeshows or webinars).</li>
          <li>Order or use Kaneriko Software products/solutions, services or other offerings.</li>
          <li>Communicate with Kaneriko Software for service or maintenance of Kaneriko Software products/solutions or services.</li>
          <li>Submit an application for employment with Kaneriko Software.</li>
        </ul>
      </section>

      <section className="mt-6 space-y-6">
        <H3 className=" text-gray-800 ">Sharing and Disclosure</H3>
        <P className="text-gray-700 leading-relaxed">
          When collecting Personal Information, we will specifically describe what information is required in order to provide you with the products/solutions or service, enter you in the promotion you have requested, respond to your inquiry or comment, or otherwise communicate with you. In order to access certain Kaneriko Software services, you may be required to sign in with Kaneriko Software Single Sign-On (SSO) credentials or another authentication mechanism. By signing into one Kaneriko Software service, you may be automatically signed into other Kaneriko Software services that use these credentials.
        </P>
      </section>

      <section className="mt-6 space-y-6">
        <H3 className="text-gray-800 ">Cookies and Tracking</H3>
        <P className="text-gray-700 leading-relaxed">
          A cookie is a small data text file that a web site sends to your browser, which is then stored on your computer. The cookie is unique to the computer you are using and can only be read by the web site that placed the cookie on your computer. We use cookies to improve the Site, analyze website traffic, and personalize content and services. You can decline cookies in your browser, but some features may not be fully functional.
        </P>
      </section>

      <section className="mt-6 space-y-6">
        <H3 className=" text-gray-800 ">User Choices</H3>
        <P className="text-gray-700 leading-relaxed">
          You may decline to accept a cookie. You may also decline persistent cookies set by the Site by selecting an option on your browser to reject cookies. You may also withdraw your consent at any time by changing your browser settings. We collect minimal analytics information to improve the Site.
        </P>
      </section>

      {/* Closing */}
      <P className="mt-10 text-gray-500 text-sm">
        This Privacy Policy only addresses the use and dissemination of information that we collect from you through processes like web forms, registrations, orders, sources described above, and similar tools. We reserve the right to update this policy at any time.
      </P>
    </div>
  );
};

export default Content;
