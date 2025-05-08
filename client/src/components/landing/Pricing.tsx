import { TitleCard } from "@/components/TitleCard";
import { Div, FeaturesSection } from "@/styledComponents";
import { PRICING_DATA } from "@/utils/data";

export function Pricing() {
  return (
    <FeaturesSection>
      <h2>Simple Pricing</h2>
      <Div className="features-wrapper">
        {PRICING_DATA.map((tier) => (
          <TitleCard key={tier.id} {...tier} />
        ))}
      </Div>
    </FeaturesSection>
  );
}
