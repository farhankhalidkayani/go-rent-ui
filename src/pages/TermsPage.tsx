import React from "react";
import "./TermsPage.css";

const TermsPage: React.FC = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-content">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-updated">Last Updated: April 20, 2025</p>

          <div className="terms-section">
            <p>
              Welcome to Go-Rent. These Terms of Service ("Terms") govern your
              use of the Go-Rent website, mobile applications, and services
              (collectively, the "Service"). Please read these Terms carefully
              before using the Service.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the Terms, you may not
              access the Service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">1. Definitions</h2>
            <p>
              <strong>"Go-Rent"</strong> refers to our company, the website, and
              the application.
            </p>
            <p>
              <strong>"Service"</strong> refers to the website, application, and
              services provided by Go-Rent.
            </p>
            <p>
              <strong>"User"</strong> refers to individuals who use our Service
              in any capacity.
            </p>
            <p>
              <strong>"Renter"</strong> refers to Users who rent items through
              our Service.
            </p>
            <p>
              <strong>"Provider"</strong> refers to Users who list items for
              rent through our Service.
            </p>
            <p>
              <strong>"Listing"</strong> refers to an item posted for rent on
              our Service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">2. Account Registration</h2>
            <p>
              To access certain features of the Service, you must register for
              an account. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding the password you use to
              access the Service and for any activities or actions under your
              password. You agree not to disclose your password to any third
              party.
            </p>
            <p>
              You must be at least 18 years old to create an account and use the
              Service. By creating an account, you represent and warrant that
              you are at least 18 years old.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">3. User Conduct</h2>
            <p>You agree not to use the Service:</p>
            <ul className="terms-list">
              <li>
                In any way that violates any applicable national, federal,
                state, local, or international law or regulation
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material, including any "junk mail," "chain letter,"
                "spam," or any other similar solicitation
              </li>
              <li>
                To impersonate or attempt to impersonate Go-Rent, a Go-Rent
                employee, another user, or any other person or entity
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Service, or which, as
                determined by us, may harm Go-Rent or users of the Service or
                expose them to liability
              </li>
              <li>
                To list prohibited items including but not limited to weapons,
                controlled substances, or illegal goods
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="section-title">4. Rental Process</h2>
            <h3 className="subsection-title">4.1 Listings</h3>
            <p>
              Providers may create Listings for items they wish to rent out.
              Providers must provide accurate and complete information about
              their items, including photos, descriptions, availability, rental
              rates, and any restrictions or requirements.
            </p>
            <p>
              Go-Rent reserves the right to remove any Listing at any time for
              any reason without notice.
            </p>

            <h3 className="subsection-title">4.2 Bookings</h3>
            <p>
              Renters may request to book items based on the information
              provided in the Listings. Providers have the right to accept or
              decline booking requests at their discretion.
            </p>
            <p>
              Once a booking is confirmed, both parties are bound by the terms
              of the rental agreement, including dates, pricing, and any
              additional terms specified in the Listing.
            </p>

            <h3 className="subsection-title">4.3 Payments</h3>
            <p>
              All payments must be processed through the Go-Rent platform.
              Renters agree to pay the full amount as specified in the Listing,
              plus any applicable fees, taxes, or security deposits.
            </p>
            <p>
              Go-Rent will hold the payment until the rental period begins, at
              which point the funds will be released to the Provider, minus
              Go-Rent's service fee.
            </p>

            <h3 className="subsection-title">4.4 Cancellations</h3>
            <p>
              Cancellation policies are set by Providers and must be clearly
              stated in the Listing. Refunds for cancellations will be processed
              according to the specified cancellation policy.
            </p>
            <p>
              Go-Rent reserves the right to override the cancellation policy in
              exceptional circumstances or disputes.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">5. Fees and Payments</h2>
            <p>
              Go-Rent charges a service fee for use of the platform. The fee
              structure will be clearly displayed before any transaction is
              completed.
            </p>
            <p>
              Providers receive the rental amount minus the Go-Rent service fee.
              Payments are processed through our secure payment system.
            </p>
            <p>
              All fees are non-refundable except as expressly set forth in these
              Terms or as required by applicable law.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">6. Damage and Security Deposits</h2>
            <p>
              Providers may require a security deposit for their items. The
              security deposit amount must be clearly stated in the Listing.
            </p>
            <p>
              If an item is returned damaged, the Provider must report the
              damage within 48 hours of the rental end time. Go-Rent will
              mediate any disputes regarding damages and security deposits.
            </p>
            <p>
              Security deposits will be refunded to the Renter within 3 business
              days after the rental period ends if no damage is reported.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">
              7. Disclaimers and Limitations of Liability
            </h2>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
              GO-RENT EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT.
            </p>
            <p>
              GO-RENT MAKES NO WARRANTY THAT THE SERVICE WILL MEET YOUR
              REQUIREMENTS, BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR
              ERROR-FREE BASIS, OR BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR
              SAFE.
            </p>
            <p>
              IN NO EVENT WILL GO-RENT BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
              EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN
              CONNECTION WITH THESE TERMS OR THE USE OR INABILITY TO USE THE
              SERVICE.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">8. Dispute Resolution</h2>
            <p>
              In the event of a dispute between Users, the parties agree to
              first attempt to resolve the dispute by contacting Go-Rent
              Support. Go-Rent will review the case and make a determination
              based on the evidence provided.
            </p>
            <p>
              For any dispute you have with Go-Rent, you agree to first contact
              us and attempt to resolve the dispute with us informally.
            </p>
            <p>
              Any dispute that cannot be resolved informally shall be resolved
              through binding arbitration in accordance with the American
              Arbitration Association's rules.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">9. Termination</h2>
            <p>
              Go-Rent may terminate or suspend your access to the Service
              immediately, without prior notice or liability, for any reason,
              including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service or contact us to request account
              deletion.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">10. Changes to Terms</h2>
            <p>
              Go-Rent reserves the right to modify or replace these Terms at any
              time. If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="section-title">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="contact-info">
              Email: legal@gorent.example.com
              <br />
              Address: 123 Rental Street, San Francisco, CA 94103
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
