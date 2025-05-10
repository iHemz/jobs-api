import { LOGO } from "@/assets";
import { ImageWrapper } from "@/styledComponents";
import { Link } from "react-router";

type Props = {
  path: string;
  className?: string;
};
export function Logo({ path, className = "" }: Props) {
  return (
    <Link to={path} className={`logo ${className}`}>
      <ImageWrapper src={LOGO} alt="" />
      <h2>Jobizzi</h2>
    </Link>
  );
}
