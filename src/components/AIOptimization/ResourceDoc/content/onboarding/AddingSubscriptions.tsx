import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const AddingSubscriptions: React.FC = () => {
  // Separated states so the two notes open/close independently
  const [openFirstNote, setOpenFirstNote] = useState(true);
  const [openSecondNote, setOpenSecondNote] = useState(true);

  return (
    <div className="space-y-2">
      <H3 className="text-[#009565]">Adding Subscriptions</H3>

      <P>
        Once you have added at least one Service Principal in CloudDIET, you can
        add your Azure Subscriptions.
      </P>

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
              onClick={() => setOpenFirstNote((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openFirstNote ? "×" : "+"}
            </button>

            {openFirstNote && (
              <P>
                You must have completed the previous Adding Service Principals
                steps before proceeding.
              </P>
            )}
          </div>
        </div>
      </div> {/* <-- ADDED MISSING CLOSING TAG HERE */}

      <H3 className="my-4">Configuration Steps</H3>

      <ol className="list-decimal list-inside space-y-6">
        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Log in to CloudDIET and navigate to Settings
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/AddingSubs1.webp"
            alt=""
          />
        </li>

        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Click Add Subscription and enter the Azure Subscription ID (GUID)
          along with the associated credential. The subscription will be
          validated automatically to ensure successful authentication.
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/AddingSubs2.webp"
            alt=""
          />
        </li>

        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Once added and validated, you will see the Azure Subscription(s)
          listed and the current status. CloudDIET will automatically begin
          profiling your Azure Subscription. Depending on the amount of
          resources in the Subscription, this can take anywhere from a few
          minutes to several hours.
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/AddingSubs3.webp"
            alt=""
          />
        </li>
      </ol>

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
              onClick={() => setOpenSecondNote((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openSecondNote ? "×" : "+"}
            </button>

            {openSecondNote && (
              <P>
                As long as CloudDIET is not actively profiling the Subscription,
                it can be paused or removed at any time.
              </P>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingSubscriptions;