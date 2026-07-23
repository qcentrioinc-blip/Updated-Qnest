import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const Service: React.FC = () => {
  const [openInfo, setOpenInfo] = useState(true);
  const [openWarning, setOpenWarning] = useState(true);

  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Service Principals</H3>

      <P>
        CloudDIET uses Service Principals to securely and auditably access your
        Azure environment.
      </P>

      <H3 className="my-4">Adding Credentials to CloudDIET</H3>

      <P>
        Create Service Principals in Azure Active Directory using the Onboarding
        Guide. Then add their credentials in CloudDIET settings. Most customers
        use one Service Principal, but multiple are supported. Each Azure
        Subscription must link to only one Service Principal, but different
        Subscriptions may use different ones.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/Service1.webp"
        alt="Service Principals"
      />

      <div className="my-6">
        <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
          {/* LEFT ICON BAR */}
          <div className="w-22 bg-gray-300 flex items-center justify-center pt-4">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm">
              i
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 px-5 py-4 relative">
            <button
              onClick={() => setOpenInfo((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openInfo ? "×" : "+"}
            </button>

            {openInfo && (
              <P>
                Credentials are stored in an HSM-backed vault under a zero-trust
                model. To revoke access, delete credentials in CloudDIET or remove
                the Service Principal secret/account in Azure AD.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Updating Secrets</H3>

      <P>
        You can rotate Service Principal secrets anytime in CloudDIET settings.
        Once saved, secrets are not visible but can be updated again later.
      </P>

      <H3 className="my-4">Removing Credentials</H3>

      <P>
        Remove credentials from CloudDIET anytime if no Azure Subscription is
        linked. Removed credentials cannot be recovered.
      </P>

      <div className="my-6">
        <div className="flex border border-orange-300 rounded-md overflow-hidden bg-white shadow-sm">
          {/* LEFT ICON BAR */}
          <div className="w-22 bg-orange-300 flex items-center justify-center pt-4">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm">
              !
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 px-5 py-4 relative">
            <button
              onClick={() => setOpenWarning((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openWarning ? "×" : "+"}
            </button>

            {openWarning && (
              <P>
                To change credentials linked to a Subscription: First create a
                new Service Principal, then update the Subscription in
                CloudDIET. Do not delete and re-add the Subscription, or
                profiling metadata will be lost.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Auditing</H3>

      <P>
        Service Principal activity can be audited in Azure Active Directory
        using native tools like Sign-in logs.
      </P>
    </div>
  );
};

export default Service;