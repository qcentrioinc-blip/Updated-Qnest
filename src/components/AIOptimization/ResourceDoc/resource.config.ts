import React from "react";

export type ResourceItem = {
  slug: string;
  label: string;
  component: () => Promise<{ default: React.ComponentType<Record<string, unknown>> }>;
  type?: "text" | "cards";
  audio?: string;
};

export type ResourceCategory = {
  label: string;
  items: ResourceItem[];
};

export const resourceConfig: Record<string, ResourceCategory> = {
  whyclouddiet: {
    label: "Why Clouddiet",
    items: [
      {
        slug: "clouddiet",
        label: "Clouddiet",
        component: () => import("./content/onboarding/Clouddiet"),
        type: "text",
        audio: "/AIResource/WhyCloudDiet.mp3"
      }
    ]
  },
  onboarding: {
    label: "Onboarding",
    items: [
      {
        slug: "register",
        label: "Register",
        component: () => import("./content/onboarding/Register"),
        type: "text",
        audio: "/AIResource/Register.mp3"
      },
      {
        slug: "single-sign-on-sso",
        label: "Single Sign-On (SSO)",
        component: () => import("./content/onboarding/Sign-On"),
        type: "cards",
        audio: "/AIResource/SSO.mp3"
      },
      {
        slug: "clouddiet-permissions",
        label: "CloudDIET Permissions",
        component: () => import("./content/onboarding/Clouddietpermissions"),
        type: "text",
        audio: "/AIResource/CloudPermissions.mp3"
      },
      {
        slug: "adding-service-principal",
        label: "Adding Service Principals",
        component: () => import("./content/onboarding/AddingService"),
        type: "text",
        audio: "/AIResource/ServicePrincipal.mp3"
      },
      {
        slug: "adding-subscriptions",
        label: "Adding Subscriptions",
        component: () => import("./content/onboarding/AddingSubscriptions"),
        type: "text",
        audio: "/AIResource/AddingSubscription.mp3"
      },
      {
        slug: "profile-activites",
        label: "Profiling Activities",
        component: () => import("./content/onboarding/ProfilingActivities"),
        type: "text",
        audio: "/AIResource/ProfilingActivities.mp3"
      }
    ]
  },
  features: {
    label: "Features",
    items: [
      {
        slug: "optimizations",
        label: "Optimizations",
        component: () => import("./content/features/Optimizations"),
        type: "text",
        audio: "/AIResource/Optimizations.mp3"
      },
      {
        slug: "saving-plans",
        label: "Saving Plans",
        component: () => import("./content/features/SavingPlans"),
        type: "text"
      },
      {
        slug: "cost-explorer",
        label: "Cost Explorer",
        component: () => import("./content/features/CostExplorer"),
        type: "text",
        audio: "/AIResource/CostExplorer.mp3"
      }
    ]
  },
  management: {
    label: "Management",
    items: [
      {
        slug: "user-permissions",
        label: "User Permission",
        component: () => import("./content/management/UserPermission"),
        type: "text"
      },
      {
        slug: "service-principal",
        label: "Service Principal",
        component: () => import("./content/management/Service"),
        type: "text"
      },
      {
        slug: "subscriptions",
        label: "Subscriptions",
        component: () => import("./content/management/Subscriptions"),
        type: "cards"
      }
    ]
  },
  additional: {
    label: "Additional",
    items: [
      {
        slug: "overview",
        label: "Overview",
        component: () => import("./content/Additional/Overview"),
        type: "text",
        audio: "/AIResource/Overview.mp3"
      },
      {
        slug: "support",
        label: "Support",
        component: () => import("./content/Additional/upport"),
        type: "text",
        audio: "/AIResource/Support.mp3"
      }
    ]
  }
};