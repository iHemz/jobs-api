import {
  DATA_ANALYSIS,
  DATA_INPUT,
  DETAILED_ANALYTICS,
  INTERVIEW_PREP,
  NOTIFICATIONS,
  RESUME_MGT,
} from "@/assets";
import type {
  JobCategory,
  JobType,
  MenuLinkProps,
  SocialProps,
  TestimonialProp,
  TitleCardProps,
} from "@/types/common";
import {
  FaCreateJob,
  FaEmail,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaTwitter,
  FaUser,
  FaWork,
} from "@/utils/icons";
import { EventAvailable, HourglassTop, WorkOff } from "@mui/icons-material";

export const FEATURES_DATA: TitleCardProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Comprehensive Application Tracking",
    text: `Log every detail of your job applications - from company names and positions to application dates and follow-up reminders. Never lose track of where you've applied.`,
    image_url: DATA_ANALYSIS,
  },
  {
    id: crypto.randomUUID(),
    title: "Comprehensive Application Tracking",
    text: `Easily update the status of each application - from 'Applied' to
   'Interviewing' to 'Offer Received'. Visualize your progress at a
   glance.`,
    image_url: DATA_INPUT,
  },
  {
    id: crypto.randomUUID(),
    title: "Smart Reminders & Notifications",
    text: `Never miss an important deadline or follow-up. Jobizzi sends you
   timely reminders to keep your job search on track.`,
    image_url: NOTIFICATIONS,
  },
  {
    id: crypto.randomUUID(),
    title: "Detailed Analytics & Insights",
    text: `Gain valuable insights into your job search with detailed statistics
   and trends. Track your application success rates and identify areas
   for improvement.`,
    image_url: DETAILED_ANALYTICS,
  },
  {
    id: crypto.randomUUID(),
    title: "Resume & Cover Letter Management",
    text: `Store and organize different versions of your resume and cover
            letters tailored to specific job applications.`,
    image_url: RESUME_MGT,
  },
  {
    id: crypto.randomUUID(),
    title: "Interview Preparation Tools",
    text: `Access a library of common interview questions and practice your
            responses. Track your interview performance and improve over time.`,
    image_url: INTERVIEW_PREP,
  },
];

export const TESTIMONIAL_DATA: TestimonialProp[] = [
  {
    id: crypto.randomUUID(),
    testimonial: `"Jobizzi completely transformed my job search. I went from feeling
            overwhelmed to being in complete control of my applications."`,
  },
  {
    id: crypto.randomUUID(),
    testimonial: `"The analytics feature helped me understand where I needed to
            improve, and I landed my dream job within 3 months!"`,
  },
  {
    id: crypto.randomUUID(),
    testimonial: `"I love how easy it is to track every detail of my applications. The
            reminders have been a lifesaver!"`,
  },
];

export const PRICING_DATA: TitleCardProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Free Plan",
    list: ["Track up to 10 applications", "Basic analytics", "Email reminders"],
    btnLink: "/auth/register",
    btnTitle: "Get Started",
  },
  {
    id: crypto.randomUUID(),
    title: "Pro Plan",
    list: [
      "Unlimited applications",
      "Advanced analytics",
      "Interview preparation tools",
      "Priority support",
    ],
    btnLink: "/auth/register",
    btnTitle: "Upgraded Now",
  },
];

export const SOCIALS_DATA: SocialProps[] = [
  {
    id: crypto.randomUUID(),
    href: "https://linkedin.com/in/williamsbalogun",
    icon: FaLinkedinIn,
  },
  {
    id: crypto.randomUUID(),
    href: "https://github.com/iHemz",
    icon: FaGithub,
  },
  {
    id: crypto.randomUUID(),
    href: "https://x.com/king_hayjhay?t=dYki_UiPlenRuIpXYUMCvA&s=09",
    icon: FaTwitter,
  },
  {
    id: crypto.randomUUID(),
    href: "mailto:williamsbalogun49@gmail.com",
    icon: FaEmail,
  },
];

export const MENU_LINKS: MenuLinkProps[] = [
  {
    id: crypto.randomUUID(),
    href: "/app",
    icon: FaHome,
    title: "Dashboard",
  },
  {
    id: crypto.randomUUID(),
    href: "/app/jobs",
    icon: FaWork,
    title: "Jobs",
  },
  {
    id: crypto.randomUUID(),
    href: "/app/jobs/create",
    icon: FaCreateJob,
    title: "Add Job",
  },
  {
    id: crypto.randomUUID(),
    href: "/app/profile",
    icon: FaUser,
    title: "Profile",
  },
];

export const JOBS_TYPE: Record<JobCategory, JobType> = {
  pending: {
    icon: HourglassTop,
    class: "pending-job",
    title: "Pending Applications",
  },
  scheduled: {
    icon: EventAvailable,
    class: "scheduled-job",
    title: "Scheduled Interviews",
  },
  declined: { icon: WorkOff, class: "declined-job", title: "Jobs Declined" },
};
