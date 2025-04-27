import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CreateListingPage from "./pages/CreateListingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import BrowsePage from "./pages/BrowsePage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import RentalDetailPage from "./pages/RentalDetailPage";
import MessagesPage from "./pages/MessagesPage";
import UserDashboardPage from "./pages/UserDashboardPage";

// Import the new account pages
import ProfilePage from "./pages/ProfilePage";
import BookingsPage from "./pages/BookingsPage";
import MyListingsPage from "./pages/MyListingsPage";
import ReviewsPage from "./pages/ReviewsPage";
import TransactionsPage from "./pages/TransactionsPage";

import "./App.css";
// Import our test styles directly
import "./test-styles.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Pages (without Layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* User Account Pages (with Layout) */}
          <Route
            path="/profile"
            element={
              <Layout>
                <ProfilePage />
              </Layout>
            }
          />
          <Route
            path="/bookings"
            element={
              <Layout>
                <BookingsPage />
              </Layout>
            }
          />
          <Route
            path="/my-listings"
            element={
              <Layout>
                <MyListingsPage />
              </Layout>
            }
          />
          <Route
            path="/reviews"
            element={
              <Layout>
                <ReviewsPage />
              </Layout>
            }
          />
          <Route
            path="/transactions"
            element={
              <Layout>
                <TransactionsPage />
              </Layout>
            }
          />

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
          <Route
            path="/how-it-works"
            element={
              <Layout>
                <HowItWorksPage />
              </Layout>
            }
          />
          <Route
            path="/browse"
            element={
              <Layout>
                <BrowsePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutUsPage />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <PrivacyPage />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <TermsPage />
              </Layout>
            }
          />
          <Route
            path="/categories"
            element={
              <Layout>
                <CategoriesPage />
              </Layout>
            }
          />
          <Route
            path="/categories/:categoryId"
            element={
              <Layout>
                <CategoriesPage />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQPage />
              </Layout>
            }
          />
          <Route
            path="/rentals/:id"
            element={
              <Layout>
                <RentalDetailPage />
              </Layout>
            }
          />
          <Route
            path="/messages"
            element={
              <Layout>
                <MessagesPage />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <UserDashboardPage />
              </Layout>
            }
          />

          {/* Additional routes to be added later */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
