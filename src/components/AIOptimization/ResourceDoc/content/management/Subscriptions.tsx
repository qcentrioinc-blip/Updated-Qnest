import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const Subscriptions: React.FC = () => {
  const [openPauseWarning, setOpenPauseWarning] = useState(true);
  const [openRemoveWarning, setOpenRemoveWarning] = useState(true);

  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Subscriptions</H3>

      <P>
        CloudDIET leverages Service Principals to access your Azure environment in
        a secure and auditable way.
      </P>

      <H3 className="my-4">Adding Subscriptions to CloudDIET</H3>

      <P>
        Azure Subscriptions can be added to CloudDIET at any time, but you must
        first have created at least one Credential (Service Principal). Once
        added, you will see the Azure Subscription(s) listed and the current
        status. CloudDIET will automatically begin profiling your Azure
        Subscription. Depending on the amount of resources in the Subscription,
        this can take anywhere from a few minutes to several hours.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/Service1.webp"
        alt="Subscriptions"
      />

      <H3 className="my-4">Changing Credentials</H3>

      <P>
        The Credentials associated with an Azure Subscription can be changed at
        any time as long as that Subscription is not actively being profiled.
      </P>

      <H3 className="my-4">Pausing and Resuming Subscription Profiling</H3>

      <P>
        Subscriptions can be paused at any time as long as that Subscription is
        not actively being profiled. The Subscription and all of its profiling
        metadata will be retained indefinitely while paused.
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
              onClick={() => setOpenPauseWarning((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openPauseWarning ? "×" : "+"}
            </button>

            {openPauseWarning && (
              <P>
                Pausing a Subscription will prevent any further profiling. Once
                resumed, there may be a gap in reporting as CloudDIET will not
                attempt to evaluate missed days.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Removing Subscriptions</H3>

      <P>
        Subscriptions can be removed at any time as long as that Subscription
        is not actively being profiled.
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
              onClick={() => setOpenRemoveWarning((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openRemoveWarning ? "×" : "+"}
            </button>

            {openRemoveWarning && (
              <P>
                Removing an Azure Subscription from CloudDIET will also delete
                all profiling metadata.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Subscriptions Status</H3>

      <P>
        The status of an Azure Subscription is based on the result of its most
        recent profiling. Ideally, the status should be "Active" or display the
        current state of any profiling activities. Errors will also be
        displayed and can range from authentication issues to deleted
        Subscriptions. The error message will display the reason and aid in any
        troubleshooting.
      </P>
    </div>
  );
};

export default Subscriptions;