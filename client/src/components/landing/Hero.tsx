import { TRACKER_IMAGE } from "@/assets";
import { Button, Div, HeroSection, ImageWrapper } from "@/styledComponents";
import { useNavigate } from "react-router";

export function Hero() {
  const navigate = useNavigate();
  return (
    <HeroSection className="section hero">
      <div>
        <h2>Your Personal Job Application Tracker</h2>
        <p>
          Take control of your job search with Jobizzi - the ultimate platform
          for tracking, managing, and analyzing your job applications.
        </p>
        <Button onClick={() => void navigate("/register")}>
          Start Tracking Today
        </Button>
      </div>
      <Div>
        <ImageWrapper src={TRACKER_IMAGE} alt="" width="100%" height="100%" />
      </Div>
    </HeroSection>
  );
}
