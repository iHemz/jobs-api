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
