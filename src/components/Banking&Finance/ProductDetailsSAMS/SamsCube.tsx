import { useState } from "react";
import { H2, P } from "../../../styles/Typography";

// ─── Objects3D — Replaced invalid SVG wrapper with a centered image ─────────
const Objects3D = () => (
  <div className="flex items-center justify-center px-4 sm:px-8 py-2">
    <img src="/BNFCos/Cube.webp" alt="Cube" className="w-[70%] sm:w-[80%] h-auto object-contain" />
  </div>
);

interface GroupButtonProps {
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

// ─── GroupButton — Updated colors and borders to match image ──────────────────
const GroupButton = ({ className = "", children = "Group", isActive = false, onClick }: GroupButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-[8px] border-[1.5px] border-[#024731] py-[6px] sm:py-[8px] text-[12px] sm:text-[13.5px] font-bold transition-colors hover:bg-blue-50/50 
      ${isActive ? "!bg-[#024731] text-white hover:!bg-[#024731]" : "bg-transparent text-gray-900"} 
      ${className}`}
  >
    {children}
  </button>
);

// ─── LeftPanel — Increased card padding and spacing, updated background ───────
const LeftPanel = () => (
  <div
    className="flex w-full lg:w-[45%] xl:w-[42%] flex-shrink-0 flex-col gap-[12px] sm:gap-[16px] rounded-[24px] p-6 sm:p-8"
    style={{ backgroundColor: "#E4EEFA" }}
  >
    <div className="flex justify-center">
      <GroupButton className="w-[60%] lg:w-[46%] px-3">Monitoring</GroupButton>
    </div>
    <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
      <GroupButton className="flex-1 min-w-[30%] sm:min-w-0 px-1 lg:px-2">Alerts</GroupButton>
      <GroupButton className="flex-1 min-w-[30%] sm:min-w-0 px-1 lg:px-2">Classification</GroupButton>
      <GroupButton className="flex-1 min-w-[30%] sm:min-w-0 px-1 lg:px-2">Provisioning</GroupButton>
    </div>

    <Objects3D />

    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      <GroupButton className="w-full px-1 lg:px-2">Recovery</GroupButton>
      <GroupButton className="w-full px-1 lg:px-2">Compliance</GroupButton>
    </div>
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      <GroupButton className="w-full px-1 lg:px-2">Dashboards</GroupButton>
      <GroupButton className="w-full px-1 lg:px-2">SMA</GroupButton>
    </div>
    <div className="flex justify-center gap-2 sm:gap-4">
      <GroupButton className="w-[48%] px-1 lg:px-2">NPL</GroupButton>
      <GroupButton className="w-[48%] px-1 lg:px-2">EWS</GroupButton>
    </div>
  </div>
);

// ─── Divider — Updated color to a soft blue ──────────────────────────────────
const Divider = () => (
  <hr className="border-t-[1.5px] border-[#AEC6E4] my-5 sm:my-6" />
);

// ─── Data ────────────────────────────────────────────────────────────────────
const sectionData = [
  {
    id: 0,
    title: "EWS",
    desc1: "The Early Warning Signals system continuously monitors borrower accounts, transactions, and external data sources to identify potential stress before it escalates. It tracks cheque returns, limit utilization, repayment patterns, and adverse market movements.",
    desc2: "Alerts are generated from CBS transactions, stock markets, balance sheets, and media reports. Event-based triggers include frequent cheque returns, temporary overdrafts, stopped transactions, and the invocation of letters of credit for early intervention.",
    pointer1: "Continuous monitoring of CBS transactions, stock markets, balance sheets, and media reports for early warning indicators",
    pointer2: "Event-based alerts for cheque returns, temporary overdrafts, stopped transactions, and invocation of letters of credit",
  },
  {
    id: 1,
    title: "SMA",
    desc1: "Special Mention Accounts module identifies accounts showing signs of stress but not yet classified as NPLs. It tracks overdue principal, interest, and repayment schedules across loan products to capture early stress indicators.",
    desc2: "The system categorizes SMA accounts based on days of overdue to enable proactive collection efforts. This early identification helps prevent accounts from deteriorating into non-performing asset classification.",
    pointer1: "Identification of accounts with overdue principal and interest before classification as non-performing assets",
    pointer2: "Categorization based on days overdue to enable proactive collection and recovery actions",
  },
  {
    id: 2,
    title: "NPL",
    desc1: "NPL module automates asset classification as per IRAC norms based on days overdue and security coverage. It handles secured and unsecured accounts separately with sub-standard, doubtful, and loss classifications.",
    desc2: "Provisioning calculations are performed automatically based on security value and principal outstanding. The system processes recovery details and provides exception handling for classification changes and security updates.",
    pointer1: "Automated asset classification into sub-standard, doubtful, and loss categories based on RBI IRAC guidelines",
    pointer2: "Provisioning computation based on secured and unsecured principal with configurable percentages for each asset status",
  },
  {
    id: 3,
    title: "Reports",
    desc1: "Standard out-of-box MIS reports provide comprehensive views of gross and net NPL across products, sectors, and customer segments. Reports include identification, classification, security, and provision details.",
    desc2: "Dynamic reporting allows users to configure, save, and schedule ad-hoc reports. Facility to view or download reports in Excel, text, or CSV formats with configurable specifications for future use.",
    pointer1: "Standard MIS reports for NPL age, product, asset status, sector, industry, and account exception details",
    pointer2: "Dynamic reporting with schedule configuration and download options in Excel, text, or CSV formats",
  }
];

// ─── RightPanel — Implemented height matching and updated colors ─────────────
const RightPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = sectionData[activeTab];

  return (
    <div className="flex flex-1 flex-col lg:w-[55%] xl:w-auto lg:pl-4 xl:pl-6 lg:pr-2 pt-8 lg:pt-2 justify-between">
      <H2
        className="font-black text-[#1A1E23] text-[32px]  dark:text-[#00AA72] sm:text-[40px] lg:text-[40px] xl:text-[48px] leading-[1.1] lg:leading-[1.07] tracking-tight mb-8"
      >
        Integrated EWS, SMA <br className="hidden lg:block" /> and NPL Solution
      </H2>
      <div className="mb-6 flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
        {sectionData.map((tab, idx) => (
          <GroupButton
            key={tab.id}
            className="flex-1 min-w-[45%] sm:min-w-0 bg-white px-2"
            isActive={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </GroupButton>
        ))}
      </div>

      {/* Wrap all paragraph/divider content into a flexible column container to distribute vertically */}
      <div className="flex-1 flex flex-col justify-start lg:justify-between pt-6 lg:pt-10 pb-4 min-h-[auto] lg:min-h-auto">
        <P className="text-[14px] lg:text-[14.5px] leading-[1.5] lg:leading-[1.6] text-gray-600">
          {activeData.desc1}
        </P>
        <Divider />
        <P className="text-[14px] lg:text-[14.5px] leading-[1.5] lg:leading-[1.6] text-gray-600">
          {activeData.desc2}
        </P>
        <Divider />
        <div className="flex flex-col sm:flex-row items-stretch gap-5 sm:gap-0">
          <P className="flex-1 sm:pr-8 text-[13.5px] lg:text-[14px] leading-[1.7] lg:leading-[1.8] text-gray-600">
            {activeData.pointer1}
          </P>
          <div className="hidden sm:block w-[1.5px] self-stretch flex-shrink-0" style={{ backgroundColor: "#AEC6E4" }} />
          <div className="block sm:hidden w-full h-[1.5px] flex-shrink-0" style={{ backgroundColor: "#AEC6E4" }} />
          <P className="flex-1 sm:pl-8 text-[13.5px] lg:text-[14px] leading-[1.7] lg:leading-[1.8] text-gray-600">
            {activeData.pointer2}
          </P>
        </div>
        <Divider />
      </div>
    </div>
  );
};

// ─── SamsCube — Main Export — Changed horizontal grid gap and items to stretch ──
const SamsCube = () => (
  <div className="w-full bg-white  dark:bg-black px-4 sm:px-6 py-10">
    <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:flex-row items-stretch gap-6 lg:gap-6 xl:gap-12">
      <LeftPanel />
      <RightPanel />
    </div>
  </div>
);

export default SamsCube;