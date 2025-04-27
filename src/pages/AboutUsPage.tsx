import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./AboutUsPage.css";

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">About Go-Rent</h1>
          <p className="hero-subtitle">
            We're reimagining how the world shares resources through
            community-powered rentals.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="mission-section">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              At Go-Rent, we believe in a future where access trumps ownership.
              Our mission is to create a world where everything is shareable,
              reducing waste and making quality items available to everyone at
              affordable prices.
            </p>
            <p className="mission-text">
              We're building a platform that connects people who need things
              with those who have them, fostering a community of trust and
              shared resources that benefits both individuals and our planet.
            </p>
          </div>
          <div className="mission-image-container">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Go-Rent team collaboration"
              className="mission-image"
            />
          </div>
        </section>

        <section className="story-section">
          <h2 className="section-title">Our Story</h2>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2022</h3>
                <h4 className="timeline-title">The Beginning</h4>
                <p className="timeline-text">
                  Go-Rent was born from a simple observation: most of us own
                  items we rarely use, while simultaneously needing items we
                  don't want to buy. Our founders, Alex Chen and Maya Patel,
                  experienced this firsthand when Alex needed an expensive power
                  tool for a weekend project and Maya had one gathering dust in
                  her garage.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2023</h3>
                <h4 className="timeline-title">Building the Platform</h4>
                <p className="timeline-text">
                  After months of research and development, we launched our beta
                  platform in select neighborhoods of San Francisco. We focused
                  on building a secure, user-friendly experience with robust
                  verification systems to establish trust within our community.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2024</h3>
                <h4 className="timeline-title">Expanding Our Reach</h4>
                <p className="timeline-text">
                  With growing demand and positive feedback, we expanded to
                  major cities across the United States. We also secured Series
                  A funding to enhance our platform's features and grow our
                  dedicated team of innovators.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2025</h3>
                <h4 className="timeline-title">Where We Are Today</h4>
                <p className="timeline-text">
                  Today, Go-Rent connects thousands of users daily, saving them
                  money while reducing environmental impact. We've facilitated
                  over 100,000 rentals and prevented an estimated 500 tons of
                  unnecessary purchases. We're just getting started on our
                  journey to transform how people think about ownership and
                  sharing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-intro">
            We're a diverse team of entrepreneurs, engineers, designers, and
            community builders united by our passion for the sharing economy and
            sustainable consumption.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Alex Chen"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">Alex Chen</h3>
              <p className="member-title">Co-Founder & CEO</p>
              <p className="member-bio">
                Previously led product at Airbnb and holds an MBA from Stanford.
                Alex is passionate about creating community-driven marketplaces
                that make better use of existing resources.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Maya Patel"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">Maya Patel</h3>
              <p className="member-title">Co-Founder & CTO</p>
              <p className="member-bio">
                Former engineering leader at Google with a PhD in Computer
                Science from MIT. Maya oversees our technology infrastructure
                and security systems.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="David Kim"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">David Kim</h3>
              <p className="member-title">Head of Operations</p>
              <p className="member-bio">
                Brings extensive experience from Uber and Lyft in scaling
                marketplace operations. David ensures our platform runs smoothly
                for all users.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image-container">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Sarah Johnson"
                  className="member-image"
                />
              </div>
              <h3 className="member-name">Sarah Johnson</h3>
              <p className="member-title">Head of Community</p>
              <p className="member-bio">
                Former Community Director at Etsy with expertise in building
                trust and safety in peer-to-peer marketplaces. Sarah is
                dedicated to nurturing the Go-Rent community.
              </p>
            </div>
          </div>

          <div className="join-team">
            <h3 className="join-team-title">Join Our Team</h3>
            <p className="join-team-text">
              We're always looking for talented individuals who share our vision
              of a more sustainable and connected world. Check out our current
              openings or drop us a line.
            </p>
            <Link to="/careers">
              <Button variant="outline">View Open Positions</Button>
            </Link>
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Community First</h3>
              <p className="value-description">
                We believe in the power of community to drive positive change.
                Every decision we make is guided by what's best for our users
                and the communities they're part of.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M8 3.935l-2-1.3C4.648 1.631 3.757 2.246 4.343 3.335l8 15A3.001 3.001 0 0016 21h2.053a3.001 3.001 0 002.886-2.11l1.548-5.815c.456-1.71-1.148-3.205-2.895-2.668l-1.863.57"
                  />
                </svg>
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-description">
                We're committed to reducing waste and environmental impact by
                making better use of existing resources through sharing and
                reuse.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Trust & Safety</h3>
              <p className="value-description">
                We prioritize creating a safe, secure platform where users can
                transact with confidence and peace of mind.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We're constantly innovating to make sharing easier, more
                accessible, and more beneficial for everyone involved.
              </p>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-content">
            <h2 className="section-title">Our Impact</h2>
            <p className="impact-text">
              Since our founding, we've been measuring our success not just in
              business metrics, but in the positive impact we create for
              communities and the environment.
            </p>

            <div className="impact-stats">
              <div className="stat-item">
                <h3 className="stat-number">100,000+</h3>
                <p className="stat-label">Successful Rentals</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">$2.5M+</h3>
                <p className="stat-label">Saved by Renters</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">50,000+</h3>
                <p className="stat-label">Active Users</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Tons of Waste Prevented</p>
              </div>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                Go-Rent has completely changed how I think about ownership. I've
                saved thousands of dollars renting items I only needed
                temporarily, and made extra income sharing things I rarely use.
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Jessica M."
                  className="author-image"
                />
                <div>
                  <p className="author-name">Jessica M.</p>
                  <p className="author-location">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="press-section">
          <h2 className="section-title">In the Press</h2>
          <div className="press-grid">
            <div className="press-item">
              <img
                src="https://via.placeholder.com/200x80?text=TechCrunch"
                alt="TechCrunch logo"
                className="press-logo"
              />
              <p className="press-quote">
                "Go-Rent is revolutionizing how we think about ownership in the
                digital age."
              </p>
            </div>
            <div className="press-item">
              <img
                src="https://via.placeholder.com/200x80?text=Forbes"
                alt="Forbes logo"
                className="press-logo"
              />
              <p className="press-quote">
                "One of the most promising startups in the sharing economy
                space."
              </p>
            </div>
            <div className="press-item">
              <img
                src="https://via.placeholder.com/200x80?text=FastCompany"
                alt="Fast Company logo"
                className="press-logo"
              />
              <p className="press-quote">
                "A smart solution to reduce consumption while creating community
                value."
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-card">
            <div className="contact-info">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-text">
                Have questions, feedback, or just want to say hello? We'd love
                to hear from you!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="method-details">
                    <h3 className="method-title">Email</h3>
                    <p className="method-value">hello@gorent.example.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="method-details">
                    <h3 className="method-title">Phone</h3>
                    <p className="method-value">(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="method-details">
                    <h3 className="method-title">Office</h3>
                    <p className="method-value">
                      123 Rental Street, San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Your email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button size="lg" className="submit-button">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
