import React from "react";
import { H3, P } from "../../../../../styles/Typography";

const upport: React.FC = () => {
  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Support</H3>

      <P>
        For any assistance with issues or configuration, please contact support
        at{" "}
        <a className="text-blue-500" href="mailto:support@clouddiet.ai">
          support@clouddiet.ai
        </a>
      </P>
    </div>
  );
};

export default upport;