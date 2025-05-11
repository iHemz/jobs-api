import type { IconType } from "react-icons/lib";

export type TitleCardProps = {
  id: string;
  title: string;
  image_url?: string;
  text?: string;
  list?: string[];
  btnLink?: string;
  btnTitle?: string;
};

export type TestimonialProp = {
  id: string;
  testimonial: string;
};

export type SocialProps = {
  id: string;
  href: string;
  icon: IconType;
};

export type MenuLinkProps = {
  id: string;
  href: string;
  icon: IconType;
  title: string;
};

export type JobType = {
  icon: any;
  class: string;
  title: string;
};

export type JobCategory = "pending" | "scheduled" | "declined";
