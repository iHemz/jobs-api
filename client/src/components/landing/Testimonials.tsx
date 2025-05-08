import { Div, FeaturesSection } from "@/styledComponents";
import { TESTIMONIAL_DATA } from "@/utils/data";

export function Testimonials() {
  return (
    <FeaturesSection>
      <h2>What Our Users Are Saying</h2>
      <Div className="features-wrapper">
        {TESTIMONIAL_DATA.map(({ id, testimonial }) => (
          <blockquote key={id}>{testimonial}</blockquote>
        ))}
      </Div>
    </FeaturesSection>
  );
}
