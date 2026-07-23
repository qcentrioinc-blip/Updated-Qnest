import { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const AddingService: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-2">
      <H3 className="text-[#009565] my-4">
        Adding Service Principals
      </H3>

      <P>
        Once you created the Service Principal(s) with the required permissions in your Azure environment, you must configure them in CloudDIET.
      </P>

      <H3 className="my-4">Configuration Steps</H3>

      <ol className="list-decimal list-inside space-y-6">
        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Log in to CloudDIET, navigate to Settings, and then Credentials.
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/Adding1.webp"
            alt="Step 1 Credentials"
          />
        </li>

        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Click the Add Credentials button and provide the Service Principal details from the previous CloudDIET Permissions step. The Service Principal will be validated automatically to ensure it can properly authenticate.
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/Adding2.webp"
            alt="Step 2 Add Credentials"
          />
        </li>

        <li className="space-y-3 font-quadran font-regular leading-[120%] text-[10px] xl:text-[12px]">
          Once added and validated, you will see the Service Principal(s) listed and the secret expiration date. You can now configure your Azure Subscriptions in CloudDIET.
          <img
            className="xl:pl-16 block mt-2"
            src="/AI-CloudFinOps/Resources/Adding3.webp"
            alt="Step 3 Validation"
          />
        </li>
      </ol>

      <H3 className="my-4">Note</H3>
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
              onClick={() => setOpen((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {open ? "×" : "+"}
            </button>

            {open && (
              <P>
                Credentials are securely stored in an HSM-backed vault with a
                zero-trust security model. At any time, you can revoke access to
                your credentials by deleting them from the CloudDIET portal or by
                deleting the Service Principal(s) secret and/or account from your
                Azure Active Directory.
              </P>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingService;