import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import DashboardLayout from "src/layouts/DashboardLayout";
import LoginLayout from "src/layouts/LoginLayout";

export const routes = [
  {
    exact: true,
    path: "/dashboard",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard")),
  },

  {
    exact: true,
    path: "/users",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Userlist")),
  },
  // View user

  {
    exact: true,
    path: "/feedbackMgmt",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Feedback Mgmt/FeedbackHome")
    ),
  },

  {
    exact: true,
    path: "/edit-users",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/UserEdit")),
  },
  {
    exact: true,
    path: "/categoryMgmt",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StackingMgmt/StackingTab")
    ),
  },

  {
    exact: true,
    path: "/contract-sniffed",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Contract/ContractSniffer")
    ),
  },

  {
    exact: true,
    path: "/contentMgmtTable",
    layout: DashboardLayout,
    component: lazy(() => import("src/component/StaticContentTable.js")),
  },

  {
    exact: true,
    path: "/nft-detail",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/User/NftDetail")),
  },
  {
    exact: true,
    path: "/user-list",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/User/UserManagement")
    ),
  },
  {
    exact: true,
    path: "/userDetails",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Viewuser.js")),
  },
  {
    exact: true,
    path: "/changePassword",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Profile/ChangePassword")
    ),
  },
  {
    exact: true,
    path: "/activityView",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Activity Management/AddViewEdit")
    ),
  },
  {
    exact: true,
    path: "/emergencyView",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Emergency Management/AddviewEdit")
    ),
  },
  {
    exact: true,
    path: "/bannerView",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Banner Management/AddViewEdit")
    ),
  },
  {
    exact: true,
    path: "/subActivityView",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Sub Activity management/SubAddViewEdit")
    ),
  },
  {
    exact: true,
    path: "/",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/LogIn")),
  },
  {
    exact: true,
    path: "/Login",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/LogIn")),
  },
  {
    exact: true,
    path: "/logo",
    layout: LoginLayout,
    component: lazy(() => import("src/component/Logo")),
  },

  {
    exact: true,
    path: "/forget-password",
    // guard:true,
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/forget-password/index")),
  },
  {
    exact: true,
    path: "/Verify-otp",
    // guard:true,
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/reset-password/VerifyOtp.js")),
  },
  {
    exact: true,
    path: "/instrauctions",
    // guard:true,
    component: lazy(() => import("src/views/auth/forget-password-link/index")),
  },
  {
    exact: true,
    path: "/reset-password",
    // guard:true,{n}
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/reset-password/index")),
  },
  {
    exact: true,
    path: "/contentMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Admin/Index")),
  },
  {
    exact: true,
    path: "/stackingDetail",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/component/StakingDetails")),
  },
  {
    exact: true,
    path: "/edit-partner",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Admin/AddPartner")),
  },
  {
    exact: true,
    path: "/view-profile",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Profile/ViewProfile")
    ),
  },
  {
    exact: true,
    path: "/edit-profile",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Profile/EditProfile")
    ),
  },
  {
    exact: true,
    path: "/viewReport",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/component/ReportView")),
  },
  {
    exact: true,
    path: "/view-partner",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Admin/AddPartner")),
  },
  {
    exact: true,
    path: "/addNewPartner",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Admin/AddNewPartner")
    ),
  },
  {
    exact: true,
    path: "/pressMedia",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Press&Media/index")
    ),
  },
  {
    exact: true,
    path: "/add-media",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Press&Media/mediaAdd")
    ),
  },
  {
    exact: true,
    path: "/view-media",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Press&Media/ViewMedia.js")
    ),
  },
  {
    exact: true,
    path: "/edit-media",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Press&Media/EditMedia.js")
    ),
  },
  {
    exact: true,
    path: "/AddPartner",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Admin/AddPartner")),
  },

  {
    exact: true,
    path: "/resouceMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/Static")
    ),
  },
  //Add Resource
  {
    exact: true,
    path: "/add-resource",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/AddResource")
    ),
  },
  //View Resource
  {
    exact: true,
    path: "/view-resource",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/ViewResource")
    ),
  },
  {
    exact: true,
    path: "/Faq-manage",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/FaqAccordian")
    ),
  },
  {
    exact: true,
    path: "/edit-faq",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/EditFaq")
    ),
  },
  {
    exact: true,
    path: "/team-management",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/TeamManagement")
    ),
  },
  {
    exact: true,
    path: "/Faq-manage",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/PrivacyManage")
    ),
  },
  {
    exact: true,
    path: "/add-team",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/AddNewTeam")
    ),
  },
  {
    exact: true,
    path: "/view-team",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/ViewTeam")
    ),
  },
  {
    exact: true,
    path: "/edit-team",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/Edit-team.js")
    ),
  },
  {
    exact: true,
    path: "/emergencyMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Emergency Management/Index")
    ),
  },
  {
    exact: true,
    path: "/bannerMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Banner Management/index")
    ),
  },
  {
    exact: true,
    path: "/activityMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Activity Management/Index")
    ),
  },
  {
    exact: true,
    path: "/sub-activityMgmt",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Sub Activity management/Index")
    ),
  },
  {
    exact: true,
    path: "/addFAQ",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/AddFAQ")
    ),
  },

  {
    exact: true,
    path: "/view-content",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/About")
    ),
  },
  {
    exact: true,
    path: "/view-contact",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/Contact")
    ),
  },

  {
    exact: true,
    path: "/view-announcements",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/Announcements")
    ),
  },

  {
    exact: true,
    path: "/edit-announcements",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/AnnouncementsEdit")
    ),
  },

  {
    exact: true,
    path: "/edit-content",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/AboutEdit")
    ),
  },

  {
    exact: true,
    path: "/edit-terms",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/TermsConditionEdit")
    ),
  },
  {
    exact: true,
    path: "/feedbackBox",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() => import("src/component/feedBackBox.js")),
  },
  {
    exact: true,
    path: "/policy",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/PrivacyPolicy")
    ),
  },

  {
    exact: true,
    path: "/edit-policy",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/PrivacyPolicyEdit")
    ),
  },

  {
    exact: true,
    path: "/view-terms",
    // guard:true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticManagement/TermsCondition")
    ),
  },

  {
    exact: true,
    path: "/terms-condition",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/TermsAndConditions")),
  },
  {
    exact: true,
    path: "/terms-services",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/TermsAndConditions/TermsServices")
    ),
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Privacy")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
