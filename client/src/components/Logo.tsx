import { LOGO } from "@/assets";
import { ImageWrapper } from "@/styledComponents";
import { Link } from "react-router";

export function Logo({ path }: { path: string }) {
  return (
    <Link to={path} className="logo">
      <ImageWrapper src={LOGO} alt="" />
      <h2>Jobizzi</h2>
    </Link>
  );
}
