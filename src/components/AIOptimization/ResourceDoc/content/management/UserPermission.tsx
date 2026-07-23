import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const UserPermission: React.FC = () => {
  const [openRemoveInfo, setOpenRemoveInfo] = useState(true);
  const [openRestrictingInfo, setOpenRestrictingInfo] = useState(true);

  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">User Permissions</H3>

      <P>
        CloudDIET authentication and single sign-on are integrated with your
        Azure Active Directory. Additional CloudDIET roles are available to manage
        user access.
      </P>

      <H3 className="my-4">Adding Users</H3>

      <P>
        No manual user addition is needed—authentication uses your Azure Active
        Directory. Users are automatically added and listed when they log in
        with their organizational account.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/UserPemi.webp"
        alt="User Permissions"
      />

      <div className="overflow-x-auto xl:pl-16 mt-6">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
                Permissions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Administrator
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Can view all data and manage all Subscriptions, Credentials, and
                User access.
              </td>
            </tr>

            <tr className="align-top bg-gray-100">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Viewers
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Can view all data, Subscriptions, Credentials, and User access, but
                not make any changes.
              </td>
            </tr>

            <tr className="align-top">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                No Access
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Can sign in, but cannot view data, Subscriptions, Credentials, or
                User access.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H3 className="my-4">Removing Users</H3>

      <P>
        Users can be removed by navigating to Users & Roles, selecting the user,
        and clicking Remove User.
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
              onClick={() => setOpenRemoveInfo((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openRemoveInfo ? "×" : "+"}
            </button>

            {openRemoveInfo && (
              <P>
                Removing a user from Users & Roles will not prevent them from
                signing back into CloudDIET unless you take the below
                Restricting Users action.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Restricting Users</H3>

      <P>
        By default, users in your organizational Azure Active Directory can sign in
        and access CloudDIET. You can restrict who can sign in by changing the
        CloudDIET Enterprise Application properties within your Azure Active
        Directory.
      </P>

      <ul className="list-disc pl-5 space-y-1">
        <li>
          <P>Sign in to the Azure Active Directory administration portal.</P>
        </li>
        <li>
          <P>
            Navigate to Enterprise applications and search for CloudDIET AI.
          </P>
        </li>
        <li>
          <P>Under Properties, select Yes for Assignment required.</P>
        </li>
      </ul>

      <P>
        This will restrict users from accessing CloudDIET unless they are
        provided access in Users and groups.
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
              onClick={() => setOpenRestrictingInfo((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {openRestrictingInfo ? "×" : "+"}
            </button>

            {openRestrictingInfo && (
              <P>
                Find additional details in Restrict your Microsoft Entra app to a
                set of users in a Microsoft Entra tenant.
              </P>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPermission;