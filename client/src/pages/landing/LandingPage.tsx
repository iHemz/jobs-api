export function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div>
          <h2>Your Personal Job Application Tracker</h2>
          <p>
            Take control of your job search with Jobizzi - the ultimate platform
            for tracking, managing, and analyzing your job applications.
          </p>
          <a href="/signup">Start Tracking Today</a>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2>Why Choose Jobizzi?</h2>
        <div>
          <div>
            <h3>Comprehensive Application Tracking</h3>
            <p>
              Log every detail of your job applications - from company names and
              positions to application dates and follow-up reminders. Never lose
              track of where you've applied.
            </p>
          </div>
          <div>
            <h3>Customizable Status Updates</h3>
            <p>
              Easily update the status of each application - from 'Applied' to
              'Interviewing' to 'Offer Received'. Visualize your progress at a
              glance.
            </p>
          </div>
          <div>
            <h3>Smart Reminders & Notifications</h3>
            <p>
              Never miss an important deadline or follow-up. Jobizzi sends you
              timely reminders to keep your job search on track.
            </p>
          </div>
          <div>
            <h3>Detailed Analytics & Insights</h3>
            <p>
              Gain valuable insights into your job search with detailed
              statistics and trends. Track your application success rates and
              identify areas for improvement.
            </p>
          </div>
          <div>
            <h3>Resume & Cover Letter Management</h3>
            <p>
              Store and organize different versions of your resume and cover
              letters tailored to specific job applications.
            </p>
          </div>
          <div>
            <h3>Interview Preparation Tools</h3>
            <p>
              Access a library of common interview questions and practice your
              responses. Track your interview performance and improve over time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2>What Our Users Are Saying</h2>
        <div>
          <blockquote>
            "Jobizzi completely transformed my job search. I went from feeling
            overwhelmed to being in complete control of my applications."
          </blockquote>
          <blockquote>
            "The analytics feature helped me understand where I needed to
            improve, and I landed my dream job within 3 months!"
          </blockquote>
          <blockquote>
            "I love how easy it is to track every detail of my applications. The
            reminders have been a lifesaver!"
          </blockquote>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2>Simple Pricing</h2>
        <div>
          <div>
            <h3>Free Plan</h3>
            <p>Track up to 10 applications</p>
            <p>Basic analytics</p>
            <p>Email reminders</p>
            <a href="/signup">Get Started</a>
          </div>
          <div>
            <h3>Pro Plan</h3>
            <p>Unlimited applications</p>
            <p>Advanced analytics</p>
            <p>Interview preparation tools</p>
            <p>Priority support</p>
            <a href="/signup">Upgrade Now</a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <h2>Ready to Transform Your Job Search?</h2>
        <p>
          Join thousands of successful job seekers who have taken control of
          their career with Jobizzi.
        </p>
        <a href="/signup">Start Your Free Trial</a>
      </section>
    </>
  );
}
