import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateListingPage from "./pages/CreateListingPage";
import "./App.css";
// Import our test styles directly
import "./test-styles.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages (without Layout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Pages with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/create-listing"
          element={
            <Layout>
              <CreateListingPage />
            </Layout>
          }
        />

        {/* Additional routes to be added later */}
      </Routes>
    </Router>
  );
}

export default App;
