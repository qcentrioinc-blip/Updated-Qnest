// featuresEHRContent.ts
export const featuresEHRContent = {
  physician: {
    cardTitle: "Intuitive Daily \n Use",
    cardDescription:
      "Log in once to access everything, patient charts, schedule, and tasks, in one clean, unified dashboard.",

    heading:
      "A Day in Your Clinical Workflow, Simplified ",

    features: [
      {
        id: 1,
        title: "One-Click Patient Profile Access",
        description:
          "Jump directly from your dashboard into any patient’s full chart, history, and current visit notes instantly.",
          image:"/EHRIcons/DailyCalender.svg"
      },
      {
        id: 2,
        title: "Smart, Calendar-Driven Patient List",
        description:
          "Your daily schedule is your workflow. See who’s checked in, in triage, or ready for your visit in real-time.",
             image:"/EHRIcons/userTrust.svg"
      },
      {
        id: 3,
        title: "Streamlined Note-Taking & Orders",
        description:
          "Document visits using smart templates, e-prescribe, and order labs without leaving the patient’s chart.",
             image:"/EHRIcons/List.svg"
      },
      {
        id: 4,
        title: "Secure Logout & Data Sync",
        description:
          " Your work auto-saves and syncs. Log out knowing all data is secure, updated, and ready for billing.",
             image:"/EHRIcons/Streamlined.svg"
      },
    ], 
  },

  admin: {
    cardTitle: "See It Live",
    cardDescription:
      "Experience how one dashboard \n gives you instant control over appointments, staff, and finances",

    heading:
      "Your Central Command Center Dashboard",

    features: [
      {
        id: 1,
        title: "Real-Time Appointment Tracking",
        description:
          "Monitor every appointment’s status—pending, checked-in, or missed—in real time to manage patient flow and reduce wait times.",
             image:"/EHRIcons/RealTime.svg"
      },
      {
        id: 2,
        title: "Automated Patient Task Lists",
        description:
          "View and assign pending follow-ups, consents, and billing tasks in one centralized to-do list for your entire team.",
             image:"/EHRIcons/ToDo.svg"
      },
      {
        id: 3,
        title: "Dynamic Schedule Management",
        description:
          "Filter and manage schedules by provider, room, or status with a click to optimize daily clinic operations.",
             image:"/EHRIcons/Replace.svg"
      },
      {
        id: 4,
        title: "Instant Financial Overview",
        description:
          "Track completed appointments, invoices, and revenue directly from the dashboard for clear, up-to-date financial insight.",
             image:"/EHRIcons/PieChart.svg"
      },
    ],
  },
};
