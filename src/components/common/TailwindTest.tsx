import React from "react";
import "./StyleTest.css"; // Add a separate CSS file for this component

// Renaming component from TailwindTest to StyleTest
const StyleTest: React.FC = () => {
  return (
    <div className="style-test-container">
      <h2 className="style-test-heading">Style Test Component</h2>

      {/* Using inline styles for a guaranteed visual difference */}
      <div
        style={{ padding: "1rem", margin: "1rem", border: "2px solid purple" }}
      >
        <p>This div uses inline styles that should always work</p>
      </div>

      {/* Using regular CSS classes instead of Tailwind */}
      <div className="blue-box">
        <p className="bold-text">
          This text should be white and bold if CSS is working
        </p>
        <p>This blue background comes from standard CSS classes</p>
      </div>

      {/* Using our direct utility classes from index.css */}
      <div className="bg-primary text-white p-4 rounded">
        <p>
          This should have a blue background and white text from our custom
          utility classes
        </p>
        <p>These styles work with standard CSS</p>
      </div>

      <button className="btn btn-secondary mt-4">Standard CSS Button</button>
    </div>
  );
};

export default StyleTest;
