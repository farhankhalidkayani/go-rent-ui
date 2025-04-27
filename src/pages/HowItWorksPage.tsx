import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./HowItWorksPage.css";

const HowItWorksPage: React.FC = () => {
  return (
    <div className="how-it-works-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">How Go-Rent Works</h1>
          <p className="page-subtitle">
            Our platform makes renting items simple, secure, and convenient for
            everyone.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Process Overview Section */}
        <section className="section">
          <h2 className="section-title">The Go-Rent Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Find What You Need</h3>
              <p className="step-description">
                Browse through thousands of verified rental listings from
                individual owners and businesses in your area.
              </p>
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Person searching for items"
                className="step-image"
              />
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Book Securely</h3>
              <p className="step-description">
                Request to book the item for your desired dates. Once approved,
                pay securely through our platform to confirm your booking.
              </p>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Secure payment"
                className="step-image"
              />
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Pick Up or Get Delivery</h3>
              <p className="step-description">
                Coordinate with the owner to pick up the item or arrange
                delivery. Verify the item's condition before taking possession.
              </p>
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Item pickup"
                className="step-image"
              />
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Use & Enjoy</h3>
              <p className="step-description">
                Enjoy using the item during your rental period. Our customer
                support is available if you need assistance.
              </p>
              <img
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Person enjoying rented item"
                className="step-image"
              />
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3 className="step-title">Return & Review</h3>
              <p className="step-description">
                Return the item in the same condition you received it. Leave a
                review to help the community and get your security deposit back.
              </p>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Review process"
                className="step-image"
              />
            </div>
          </div>
        </section>

        {/* For Renters Section */}
        <section className="section user-section">
          <div className="section-content">
            <h2 className="section-title">For Renters</h2>
            <p className="section-description">
              Save money and space by renting instead of buying items you only
              need temporarily. Go-Rent makes it easy to find exactly what you
              need, when you need it.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Cost-Effective</h3>
                  <p className="benefit-description">
                    Save money by renting instead of purchasing expensive items
                    you'll only use occasionally.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Verified Listings</h3>
                  <p className="benefit-description">
                    Every rental listing is verified for quality and accuracy,
                    ensuring you get what you expect.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Secure Payments</h3>
                  <p className="benefit-description">
                    Our secure payment system holds your payment until you
                    confirm the rental item meets your expectations.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Insurance Options</h3>
                  <p className="benefit-description">
                    Optional rental insurance to protect against accidental
                    damage for additional peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-button">
              <Link to="/browse">
                <Button size="lg">Start Browsing Items</Button>
              </Link>
            </div>
          </div>

          <div className="section-image-container">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Happy renter"
              className="section-image"
            />
          </div>
        </section>

        {/* For Rental Providers Section */}
        <section className="section user-section reverse">
          <div className="section-content">
            <h2 className="section-title">For Rental Providers</h2>
            <p className="section-description">
              Turn your unused items into income by listing them on Go-Rent. Our
              platform provides all the tools you need to manage rentals
              successfully.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Generate Extra Income</h3>
                  <p className="benefit-description">
                    Earn money from items you already own but don't use all the
                    time.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Secure Verification</h3>
                  <p className="benefit-description">
                    We verify all renters, reducing the risk of fraud or damage
                    to your items.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Easy Management</h3>
                  <p className="benefit-description">
                    Our dashboard makes it simple to manage bookings,
                    availability, and payments.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3 className="benefit-title">Security Deposits</h3>
                  <p className="benefit-description">
                    Set security deposits to cover potential damages with our
                    secure handling system.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-button">
              <Link to="/create-listing">
                <Button size="lg">List Your Items</Button>
              </Link>
            </div>
          </div>

          <div className="section-image-container">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Rental provider"
              className="section-image"
            />
          </div>
        </section>

        {/* Safety & Trust Section */}
        <section className="section trust-section">
          <h2 className="section-title">Safety & Trust</h2>
          <p className="section-subtitle">
            At Go-Rent, we prioritize building a trustworthy community where
            everyone can rent with confidence.
          </p>

          <div className="trust-features">
            <div className="trust-feature">
              <div className="trust-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="trust-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="trust-title">Verified Users</h3>
              <p className="trust-description">
                ID verification for all users ensures accountability and builds
                trust within our community.
              </p>
            </div>

            <div className="trust-feature">
              <div className="trust-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="trust-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="trust-title">Secure Transactions</h3>
              <p className="trust-description">
                Our secure payment system protects both parties throughout the
                rental process.
              </p>
            </div>

            <div className="trust-feature">
              <div className="trust-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="trust-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="trust-title">Insurance Options</h3>
              <p className="trust-description">
                Optional insurance coverage provides extra protection against
                damages or loss.
              </p>
            </div>

            <div className="trust-feature">
              <div className="trust-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="trust-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <h3 className="trust-title">24/7 Support</h3>
              <p className="trust-description">
                Our dedicated support team is always available to address any
                issues that may arise.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">
                How much does it cost to use Go-Rent?
              </h3>
              <p className="faq-answer">
                Signing up and browsing listings on Go-Rent is completely free.
                We charge a small service fee (typically 10%) on each rental
                transaction to maintain the platform and provide secure payment
                processing and customer support.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                What if an item gets damaged during my rental?
              </h3>
              <p className="faq-answer">
                If an item is damaged during your rental period, we'll work with
                both parties to resolve the issue fairly. This is where security
                deposits and optional insurance come into play. We recommend
                documenting the condition of items at pickup and return with
                photos.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How are payments handled?</h3>
              <p className="faq-answer">
                We process payments securely through our platform. When you book
                an item, your payment is held until you confirm receipt of the
                item. After your rental period ends and the item is returned in
                good condition, the payment (minus our service fee) is released
                to the provider.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I cancel a reservation?</h3>
              <p className="faq-answer">
                Yes, but cancellation policies vary by rental provider. Each
                listing specifies its cancellation policy, ranging from flexible
                to strict. Be sure to check the policy before booking. In
                general, cancellations made with more advance notice receive
                more complete refunds.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                What types of items can be rented on Go-Rent?
              </h3>
              <p className="faq-answer">
                Go-Rent supports a wide range of item categories including
                electronics, tools, vehicles, sporting equipment, event
                supplies, fashion items, and more. However, we prohibit certain
                items such as weapons, illegal goods, or anything that violates
                our terms of service.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How do I become a verified user?</h3>
              <p className="faq-answer">
                To become verified on Go-Rent, you'll need to complete our
                identity verification process, which includes confirming your
                email, phone number, and uploading a government-issued ID.
                Verified users receive a badge on their profile, building trust
                with other community members.
              </p>
            </div>
          </div>

          <div className="more-questions">
            <p>Have more questions?</p>
            <Link to="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="section cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Renting?</h2>
            <p className="cta-description">
              Join the Go-Rent community today and discover a more sustainable,
              affordable way to access the things you need.
            </p>
            <div className="cta-buttons">
              <Link to="/browse">
                <Button size="lg">Browse Items</Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorksPage;
