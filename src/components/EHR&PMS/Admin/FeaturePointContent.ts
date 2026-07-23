
export type UserRole = 'admin' | 'insuranceCoordinator';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FeatureSectionContent {
  pageTitle: string;
  heroImage: string;
  features: FeatureItem[];
}

export const FEATURE_POINT_CONTENT: Record<UserRole, FeatureSectionContent> = {
  admin: {
    pageTitle: 'Gain Instant Operational Insight',
    heroImage: '/EHR-PMS/Careers/img6.png',
    features: [
      {
        id: 1,
        title: 'Clock In & Access',
        description:
          'Log in once as an Admin to immediately see your clinic’s live status, appointments, and pending tasks on the main dashboard.',
        image:"/EHRIcons/TimeFast.svg"
      },
      {
        id: 2,
        title: 'Filter & Manage',
        description:
          'Use filters like date, provider, and appointment status to quickly find and manage any patient visit or schedule detail.',
        image:"/EHRIcons/Slider.svg",
      },
      {
        id: 3,
        title: 'Track & Assign',
        description:
          'Monitor patient flow in real-time and assign tasks or update room statuses directly from the centralized to-do list.',
        image: "/EHRIcons/Assign.svg",
      },
    ],
  },

  insuranceCoordinator: {
    pageTitle: 'Drive Tangible Revenue Cycle Improvements',
    heroImage: '/EHR-PMS/Careers/img6.webp',
    features: [
      {
        id: 1,
        title: ' Reduce Claim Denials',
        description:
          'Automated coding and built-in error checks drastically lower claim rejection rates, protecting your practice’s earned revenue.',
       image:"/EHR-PMS/InsuranceCoordinator/icon1.svg",
      },
      {
        id: 2,
        title: ' Accelerate Reimbursement Cycles',
        description:
          'Faster electronic submissions and real-time tracking of payer responses lead to significantly shorter days in accounts receivable',
    image:"/EHR-PMS/InsuranceCoordinator/icon2.svg",
      },
      {
        id: 3,
        title: 'Lower Administrative Costs ',
        description:
          'Eliminate manual data entry and status chasing, allowing your team to manage more claims with greater efficiency.',
      image:"/EHR-PMS/InsuranceCoordinator/icon3.svg",
      },
    ],
  },
};
