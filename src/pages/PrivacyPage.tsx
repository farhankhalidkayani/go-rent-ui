import React from "react";
import "./PrivacyPage.css";

const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-updated">Last Updated: April 15, 2025</p>

          <div className="privacy-section">
            <p>
              At Go-Rent, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our website, mobile application, and
              services (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using
              our Service, you acknowledge that you have read, understood, and
              agree to be bound by all the terms outlined in this policy. If you
              do not agree with our policies, please do not access or use our
              Service.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">1. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of
              our Service, including:
            </p>

            <h3 className="subsection-title">1.1 Personal Information</h3>
            <p>
              When you register for an account, list an item, or make a booking,
              we collect personal information such as:
            </p>
            <ul className="privacy-list">
              <li>Name, email address, phone number, and physical address</li>
              <li>Profile photo</li>
              <li>
                Payment information (stored securely by our payment processors)
              </li>
              <li>Government-issued ID (for verification purposes)</li>
              <li>Communication between you and other users</li>
              <li>Reviews and ratings</li>
            </ul>

            <h3 className="subsection-title">1.2 Usage Data</h3>
            <p>
              We automatically collect certain information when you visit, use
              or navigate our Service, including:
            </p>
            <ul className="privacy-list">
              <li>IP address</li>
              <li>Browser and device characteristics</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Device name</li>
              <li>Country</li>
              <li>Location (with your permission)</li>
              <li>Information about how and when you use our Service</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">2. How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="privacy-list">
              <li>Provide, operate, and maintain our Service</li>
              <li>Improve, personalize, and expand our Service</li>
              <li>Understand and analyze how you use our Service</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Process transactions and send related information including
                confirmations and receipts
              </li>
              <li>
                Verify your identity and confirm eligibility to use our services
              </li>
              <li>
                Communicate with you about updates, security alerts, and support
                messages
              </li>
              <li>Provide customer support</li>
              <li>
                Send you promotional communications, such as marketing or
                promotional materials
              </li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our Service
              </li>
              <li>
                Detect, prevent and address technical issues, security breaches,
                and fraudulent transactions
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">3. Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain
              situations, including:
            </p>

            <h3 className="subsection-title">3.1 Service Providers</h3>
            <p>
              We may share your information with third-party vendors, service
              providers, contractors or agents who perform services for us or on
              our behalf and require access to such information to do that work.
            </p>

            <h3 className="subsection-title">3.2 Other Users</h3>
            <p>
              When you use our Service, certain information may be visible to
              other users:
            </p>
            <ul className="privacy-list">
              <li>Public profile information (name, photo, rating)</li>
              <li>Listing information (photos, description, location)</li>
              <li>Reviews and ratings you have given or received</li>
              <li>
                General location (approximate, not your exact address until a
                booking is confirmed)
              </li>
            </ul>

            <h3 className="subsection-title">3.3 Legal Requirements</h3>
            <p>
              We may disclose your information where we are legally required to
              do so in order to comply with applicable law, governmental
              requests, a judicial proceeding, court order, or legal process,
              such as in response to a court order or a subpoena.
            </p>

            <h3 className="subsection-title">3.4 Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">4. Data Retention</h2>
            <p>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize it, or,
              if this is not possible (for example, because your personal
              information has been stored in backup archives), we will securely
              store your personal information and isolate it from any further
              processing until deletion is possible.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
            <p>
              Your password is an important component of our security system,
              and it is your responsibility to protect it. We recommend using a
              unique password for your Go-Rent account that is not used for
              other online accounts.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Right to Access:</strong> You may request a copy of the
                personal information we have about you.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You may request that we
                update or correct inaccurate information about you.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You may request that we
                delete your personal information in certain circumstances.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You may request
                that we restrict the processing of your information in certain
                circumstances.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You may request to
                receive your personal information in a structured, commonly
                used, and machine-readable format.
              </li>
              <li>
                <strong>Right to Object:</strong> You may object to our
                processing of your personal information in certain
                circumstances.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              contact information provided at the end of this Privacy Policy.
              Please note that these rights may be limited in some circumstances
              by applicable law.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">
              7. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information. Cookies are
              files with a small amount of data which may include an anonymous
              unique identifier. Cookies are sent to your browser from a website
              and stored on your device.
            </p>
            <p>We use these technologies for purposes such as:</p>
            <ul className="privacy-list">
              <li>Keeping you signed in</li>
              <li>Understanding how you use our Service</li>
              <li>Improving our Service</li>
              <li>Customizing our content and advertising</li>
              <li>Analyzing website traffic and trends</li>
            </ul>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">8. Third-Party Links</h2>
            <p>
              Our Service may contain links to other websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">9. Children's Privacy</h2>
            <p>
              Our Service is not intended for use by children under the age of
              18. We do not knowingly collect personally identifiable
              information from children under 18. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us. If we become aware that
              we have collected personal information from children without
              verification of parental consent, we will take steps to remove
              that information from our servers.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date at the top of this Privacy
              Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="section-title">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="contact-info">
              Email: privacy@gorent.example.com
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

export default PrivacyPage;
