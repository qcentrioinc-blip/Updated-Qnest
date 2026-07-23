import React from "react";
import { H3, P } from "../../../../../styles/Typography";

const SignOn: React.FC = () => {
  return (
    <div className="space-y-2">
      <H3 className="text-[#009565] my-4">Single Sign-On (SSO)</H3>

      <P>
        CloudDIET supports single sign-on (SSO) through Azure Active Directory.
        Use your existing Azure credentials to access your account, removing
        the need to create or remember separate CloudDIET login details.
      </P>

      <P>
        CloudDIET uses Just-in-Time (JIT) provisioning. User accounts are
        automatically created upon first SSO login.
      </P>

      <P>
        Manage user access and permissions directly within the CloudDIET
        platform.
      </P>
    </div>
  );
};

export default SignOn;