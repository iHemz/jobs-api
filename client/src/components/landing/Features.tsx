import { TitleCard } from "@/components/TitleCard";
import { Div, FeaturesSection } from "@/styledComponents";
import { FEATURES_DATA } from "@/utils/data";

export function Features() {
  return (
    <FeaturesSection>
      <h2>Why Choose Jobizzi?</h2>
      <Div className="features-wrapper">
        {FEATURES_DATA.map((feature) => (
          <TitleCard key={feature.id} {...feature} />
        ))}
      </Div>
    </FeaturesSection>
  );
}
