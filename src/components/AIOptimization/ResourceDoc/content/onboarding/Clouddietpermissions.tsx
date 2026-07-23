import React from "react";
import { H3, P } from "../../../../../styles/Typography";

const Clouddietpermissions: React.FC = () => {
  return (
    <div className="space-y-6">
      <H3 className="text-[#009565]">CloudDIET Permissions</H3>

      <P>
        This page explains how to configure CloudDIET access to analyze your
        Azure environment. CloudDIET requires only a minimum set of Azure
        built-in roles. These roles allow it to view resource configurations,
        usage metrics, and billing data.
      </P>

      <h2 className="font-quadran dark:text-white text-xl md:text-2xl lg:text-3xl my-4">
        Note:
      </h2>
      <P className="font-quicksand text-lg leading-tight tracking-wide">
        The service principal is granted read-only permissions. CloudDIET cannot
        make changes to your Azure resources or access any customer data in the
        data plane.
      </P>

      <H3 className="my-4">Steps</H3>
      <ol className="dark:text-white list-decimal list-inside space-y-6">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Create an Azure Service Principal – This allows the CloudDIET profiler
          to authenticate to Azure.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Assign Azure Resource Manager Permissions – Configure roles to
          authorize profiling of your Azure Subscriptions.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Assign Billing Account Permissions – Configure roles to authorize
          access to billing data.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Configure CloudDIET – Add the Service Principal and Subscriptions to
          the CloudDIET platform.
        </li>
      </ol>

      <H3 className="my-4">Required Azure Roles</H3>
      <div className="xl:pl-16">
        <table className="border-2 border-collapse w-full">
          <colgroup>
            <col style={{ width: "50%" }} />
          </colgroup>
          <thead>
            <tr className="border-b-2 bg-gray-200">
              <th className="text-left px-4 py-2 border-r-2 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Role
              </th>
              <th className="text-left px-4 py-2 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:text-white">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Billing Account Reader<br />
                Billing Scope
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                For MCA (Microsoft Customer Agreement) billing. Allows read
                access to billing data.
              </td>
            </tr>

            <tr className="border-b bg-gray-200">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Billing Reader<br />
                All Subscriptions
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Allows read access to billing data.
              </td>
            </tr>

            <tr className="border-b dark:text-white">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Log Analytics Reader<br />
                All Subscriptions
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                View monitoring and diagnostics data.
              </td>
            </tr>

            <tr className="border-b bg-gray-200">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Reader<br />
                All Subscriptions
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                View all resources at the Azure Resource Management plane, but
                does not allow any changes or access to the data plane.
              </td>
            </tr>

            <tr className="border-b dark:text-white">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Reservations Reader<br />
                All Subscriptions
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Allows read access to Reservations.
              </td>
            </tr>

            <tr className="bg-gray-200">
              <td className="px-4 py-3 border-r font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Savings Plan Reader<br />
                All Subscriptions
              </td>
              <td className="px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Allows read access to Savings Plans.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H3 className="my-4">Configuration Steps</H3>
      <H3>Step 1: Create an Azure Service Principal</H3>
      <ol className="list-decimal list-inside space-y-6">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Log in to the Azure portal and go to Azure Active Directory.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step1clouddiet.webp"
          alt=""
        />

        <li className="mt-16 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Select App registrations, then New registration
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step2clouddiet.webp"
          alt=""
        />

        <li className="mt-16 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Enter CloudDIET as the Name. Keep defaults and click Register.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step3clouddiet.webp"
          alt=""
        />

        <li className="mt-16 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Note the displayed GUIDs: Application (client) ID and Directory
          (tenant) ID. These will be used in CloudDIET.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step4clouddiet.webp"
          alt=""
        />

        <li className="mt-16 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Select Certificates & secrets from the menu.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step5clouddiet.webp"
          alt=""
        />

        <li className="mt-16 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Click New client secret. Add a Description and set Expires to 365
          days.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step6clouddiet.webp"
          alt=""
        />

        <li className="mt-4 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Copy the secret Value immediately. It will not be visible again and
          must be entered in CloudDIET.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step7clouddiet.webp"
          alt=""
        />

        <li className="mt-4 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Go to Overview. On the right, select Managed application in local
          directory: CloudDIET.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step8clouddiet.webp"
          alt=""
        />

        <li className="mt-4 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          The app registration automatically creates an Enterprise Application.
          Copy the Object ID for CloudDIET.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/step9clouddiet.webp"
          alt=""
        />

        <li className="mt-4 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          The Azure Service Principal is now ready. The details above must be
          configured in CloudDIET.
        </li>

        <div className="mt-6 xl:pl-16 overflow-x-auto">
          <table className="w-full border border-collapse bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4 border-r border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Value
                </th>
                <th className="text-left px-6 py-4 border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Example Value
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Application (client) ID</div>
                  <div className="text-sm text-gray-600 mt-1">
                    App Registration
                  </div>
                </td>
                <td className="px-6 py-5 text-gray-900 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  77df3525-8d2a-482a-bfb3-49eef0fa3e48
                </td>
              </tr>

              <tr className="border-b bg-gray-100">
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Directory (tenant) ID</div>
                  <div className="text-sm text-gray-600 mt-1">
                    App Registration
                  </div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  16aa304a-f0a8-4fad-b2ed-f2ef4ed93428
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Client secret</div>
                  <div className="text-sm text-gray-600 mt-1">
                    App Registration
                  </div>
                </td>
                <td className="px-6 py-5 break-all font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  PtV8Q~k0aACH64KG0m.VpWVoSfSnPZ
                </td>
              </tr>

              <tr className="border-b bg-gray-100">
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Object ID</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Enterprise Application
                  </div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  a6101ff8-8e9a-4470-8e6a-7204e050d87c
                </td>
              </tr>

              <tr>
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Subscription ID</div>
                  <div className="text-sm text-gray-600 mt-1">
                    All Subscriptions
                  </div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  1b214ac0-dccc-4b17-b019-ac05e9eaff11
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ol>

      <H3>Step 2: Assign Azure Resource Manager / Subscription Permissions</H3>
      <P>
        The Service Principal has no permissions by default. Follow these steps
        to grant the permissions needed for CloudDIET to profile your
        environment
      </P>

      <ol className="list-decimal list-inside space-y-6 gap-y-10 mb-2">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          In the Azure portal, search for Subscriptions in the top search bar.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step1.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Select a Subscription from the list.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step2.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Go to Access control (IAM) in the menu. Click Add &gt; Add role
          assignment.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step3.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          On the Add role assignment page, choose the Reader role and click Next.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step4.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          In the Members section, click + Select members. Search for and select
          the CloudDIET Service Principal created earlier, then click Select
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step5.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Click Review + assign to finalize the role assignment.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/2step6.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Repeat these steps for each role and each Subscription as needed.
        </li>

        <div className="mt-6 xl:pl-16 overflow-x-auto">
          <table className="w-full border border-gray-200 border-collapse bg-white rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 border-r border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Role
                </th>
                <th className="text-left px-6 py-4 border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Description
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b bg-white">
                <td className="px-6 border-r border-gray-200 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Billing Reader</div>
                  <div className="text-gray-600 mt-1">All Subscriptions</div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Allows read access to billing data.
                </td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="px-6 border-r border-gray-200 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Log Analytics Reader</div>
                  <div className="text-gray-600 mt-1">All Subscriptions</div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  View monitoring and diagnostics data.
                </td>
              </tr>

              <tr className="border-b bg-white">
                <td className="px-6 border-r border-gray-200 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Reader</div>
                  <div className="text-gray-600 mt-1">All Subscriptions</div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  View all resources at the Azure Resource Management plane, but
                  does not allow any changes, and does not allow access to the
                  data plane.
                </td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="px-6 border-r border-gray-200 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Reservations Reader</div>
                  <div className="text-gray-600 mt-1">All Subscriptions</div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Allows read access to Reservations.
                </td>
              </tr>

              <tr className="bg-white">
                <td className="px-6 py-5 border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  <div>Savings Plan Reader</div>
                  <div className="text-gray-600 mt-1">All Subscriptions</div>
                </td>
                <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                  Allows read access to Savings Plans.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ol>

      <H3 className="mt-4">Step 3 : Assign Billing Account Permissions</H3>
      <P>
        An additional role is required for MCA (Microsoft Customer Agreement)
        billing to grant read access to billing data.
      </P>

      <div className="mt-6 xl:pl-16 overflow-x-auto">
        <table className="w-full border border-gray-200 border-collapse bg-white rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4 border-b border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Role
              </th>
              <th className="text-left px-6 py-4 border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white">
              <td className="px-6 py-5 border-b border-r border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Billing Account Reader</div>
                <div className="text-gray-600 mt-1">Billing Scopes</div>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                For MCA (Microsoft Customer Agreement) Billing Scopes billing.
                Allows read access to billing data.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ol className="list-decimal dark:text-white list-inside space-y-6">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          In the Azure portal, search for Cost Management + Billing.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/3step1.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Select a Billing scope, then go to Access control (IAM).
        </li>

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Click Add within IAM.
        </li>
        <img
          className="xl:pl-16"
          src="/AI-CloudFinOps/Resources/3step2.webp"
          alt=""
        />

        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Set the Role to Billing account reader. Search for the CloudDIET
          Service Principal and select it. Click Save to assign the role.
        </li>
      </ol>

      <H3 className="mt-4">Step 4 : Add Service Principal(s) in CloudDIET</H3>
      <P>
        Log in to{" "}
        <a href="https://clouddiet.app" className="text-blue-600">
          https://clouddiet.app
        </a>{" "}
        using your Azure Active Directory credentials. Then, enter the Service
        Principal details collected in Step 1 to configure CloudDIET.
      </P>

      <div className="mt-6 xl:pl-16 overflow-x-auto">
        <table className="w-full border border-gray-400 border-collapse bg-white rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4 border-b border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Value
              </th>
              <th className="text-left px-6 py-4 border-b border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Example Value
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-5 border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Application (client) ID</div>
                <div className="text-gray-600 mt-1">App Registration</div>
              </td>
              <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                77df3525-8d2a-482a-bfb3-49eef0fa3e48
              </td>
            </tr>

            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-5 border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Directory (tenant) ID</div>
                <div className="text-gray-600 mt-1">App Registration</div>
              </td>
              <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                16aa304a-f0a8-4fad-b2ed-f2ef4ed93428
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-5 border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Client secret</div>
                <div className="text-gray-600 mt-1">App Registration</div>
              </td>
              <td className="px-6 py-5 break-all font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                PtV8Q~k0aACH64KG0m.VpWVoSfSnPZ
              </td>
            </tr>

            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-5 border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Object ID</div>
                <div className="text-gray-600 mt-1">Enterprise Application</div>
              </td>
              <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                a6101ff8-8e9a-4470-8e6a-7204e050d87c
              </td>
            </tr>

            <tr className="bg-white">
              <td className="px-6 py-5 border-r border-gray-400 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <div>Subscription ID</div>
                <div className="text-gray-600 mt-1">All Subscriptions</div>
              </td>
              <td className="px-6 py-5 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                1b214ac0-dccc-4b17-b019-ac05e9eaff11
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clouddietpermissions;