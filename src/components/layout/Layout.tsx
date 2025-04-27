import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css"; // Import layout-specific styles

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
