import { NOT_FOUND } from "@/assets";
import { Button, Div, ErrorSection, ImageWrapper } from "@/styledComponents";
import { useNavigate } from "react-router";

export function Error() {
  const navigate = useNavigate();

  return (
    <ErrorSection>
      <Div className="content-wrapper">
        <ImageWrapper src={NOT_FOUND} alt="" />
        <h2>Oops! Something went wrong</h2>
        <p>We're sorry, but we couldn't find the page you're looking for.</p>
        <div>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </Div>
    </ErrorSection>
  );
}
