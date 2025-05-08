import { Features, Hero, Testimonials, TitleCard } from "@/components";
import { Pricing } from "@/components/landing/Pricing";
import { ActionCallSection } from "@/styledComponents";

export function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />

      {/* Call to Action Section */}
      <ActionCallSection>
        <TitleCard
          id={crypto.randomUUID()}
          title="Ready to Transform Your Job Search?"
          text={`Join thousands of successful job seekers who have taken control of
          their career with Jobizzi.`}
          btnLink="/register"
          btnTitle="Start Your Free Trial"
        />
      </ActionCallSection>
    </>
  );
}
