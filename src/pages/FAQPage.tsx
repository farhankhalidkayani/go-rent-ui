import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./FAQPage.css";

// FAQ data structure with categories
interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "How does Go-Rent work?",
    answer:
      "Go-Rent connects people who want to rent items with those who have items to rent. You can browse listings, create an account, request to book items, and make secure payments through our platform. After using the item, simply return it to the owner according to your rental agreement.",
    category: "general",
  },
  {
    id: 2,
    question: "How much does it cost to use Go-Rent?",
    answer:
      "Creating an account and browsing listings on Go-Rent is completely free. We charge a 10% service fee on each rental transaction to maintain the platform and provide secure payment processing and customer support.",
    category: "pricing",
  },
  {
    id: 3,
    question: "What types of items can I rent on Go-Rent?",
    answer:
      "Go-Rent supports a wide range of items including electronics, vehicles, tools, sports equipment, event supplies, fashion items, and more. However, we prohibit certain items such as weapons, illegal goods, or anything that violates our terms of service.",
    category: "general",
  },
  {
    id: 4,
    question: "How do I become a verified user?",
    answer:
      "To become verified on Go-Rent, you need to complete our identity verification process, which includes confirming your email, phone number, and uploading a government-issued ID. Verified users receive a badge on their profile, building trust with other community members.",
    category: "account",
  },
  {
    id: 5,
    question: "What if an item gets damaged during my rental?",
    answer:
      "If an item is damaged during your rental period, we'll work with both parties to resolve the issue fairly. This is where security deposits and optional insurance come into play. We recommend documenting the condition of items with photos at pickup and return.",
    category: "policies",
  },
  {
    id: 6,
    question: "How are payments handled?",
    answer:
      "We process payments securely through our platform. When you book an item, your payment is held until you confirm receipt of the item. After your rental period ends and the item is returned in good condition, the payment (minus our service fee) is released to the provider.",
    category: "payments",
  },
  {
    id: 7,
    question: "Can I cancel a reservation?",
    answer:
      "Yes, but cancellation policies vary by rental provider. Each listing specifies its cancellation policy, ranging from flexible to strict. Be sure to check the policy before booking. In general, cancellations made with more advance notice receive more complete refunds.",
    category: "policies",
  },
  {
    id: 8,
    question: "How do I list my item for rent?",
    answer:
      'To list an item, you need to create an account and complete the verification process. Then, click on "List an Item" and follow the prompts to add photos, description, pricing, and availability. You\'ll also need to set your rental terms and security deposit requirements.',
    category: "listing",
  },
  {
    id: 9,
    question: "Is there a minimum or maximum rental period?",
    answer:
      "Rental periods are set by the item owner. Some items may be available for as short as a few hours, while others might require a minimum of one day or more. There's no platform-wide maximum, but owners typically set limits based on their preferences.",
    category: "listing",
  },
  {
    id: 10,
    question: "What happens if an item is returned late?",
    answer:
      "Late returns are subject to the late fee policies set by the item owner. These fees are specified in the listing details before you book. If you know you'll be late, we recommend contacting the owner to extend your rental period if possible.",
    category: "policies",
  },
  {
    id: 11,
    question: "How does insurance work on Go-Rent?",
    answer:
      "Go-Rent offers optional rental insurance for both renters and providers. This coverage helps protect against accidental damage, theft, or loss during the rental period. The cost varies based on the item value and rental duration, and you can select this option during checkout.",
    category: "payments",
  },
  {
    id: 12,
    question: "Can I rent items in different cities?",
    answer:
      "Yes! Go-Rent operates in multiple cities, and you can browse listings by location. Keep in mind that you'll need to coordinate pickup and return with the owner, so consider the logistics if you're renting in a city you're just visiting.",
    category: "general",
  },
  {
    id: 13,
    question: "What if I can't reach the item owner?",
    answer:
      "If you're having trouble communicating with an owner, please contact our customer support. We can attempt to reach them on your behalf or help resolve any issues with your booking.",
    category: "support",
  },
  {
    id: 14,
    question: "How do security deposits work?",
    answer:
      "Security deposits are set by item owners to cover potential damage. The deposit amount is shown on the listing before you book. We authorize (but don't charge) your payment method for this amount, and it's only charged if damage occurs. The authorization is released after the item is returned in good condition.",
    category: "payments",
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "account", name: "Account" },
  { id: "listing", name: "Listing Items" },
  { id: "payments", name: "Payments & Pricing" },
  { id: "policies", name: "Policies" },
  { id: "support", name: "Support" },
];

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqData);

  // Toggle FAQ item expansion
  const toggleItem = (id: number) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  // Filter FAQs based on category and search query
  useEffect(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    setFilteredFAQs(filtered);
  }, [activeCategory, searchQuery]);

  // Group FAQs by category for display
  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    const category = faq.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <div className="faq-page">
      <div className="faq-header">
        <div className="container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Find answers to common questions about using Go-Rent
          </p>
        </div>
      </div>

      <div className="container">
        {/* Category filters */}
        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="faq-search">
          <svg
            className="search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search for questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ sections */}
        {filteredFAQs.length === 0 ? (
          <div className="no-results">
            <p>
              No FAQs found matching your query. Try a different search or
              category.
            </p>
          </div>
        ) : (
          <div className="faq-sections">
            {Object.entries(groupedFAQs).map(([category, faqs]) => {
              // Find the category name for display
              const categoryName =
                categories.find((c) => c.id === category)?.name || category;

              return (
                <div key={category} className="faq-section">
                  <h2 className="section-title">{categoryName}</h2>
                  <div className="faq-list">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="faq-item">
                        <div
                          className="faq-question"
                          onClick={() => toggleItem(faq.id)}
                        >
                          <span className="question-text">{faq.question}</span>
                          <svg
                            className={`toggle-icon ${
                              expandedItems.includes(faq.id) ? "open" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <div
                          className={`faq-answer ${
                            expandedItems.includes(faq.id) ? "open" : ""
                          }`}
                        >
                          <p className="answer-text">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact CTA */}
        <div className="contact-cta">
          <h2 className="cta-title">Couldn't find an answer?</h2>
          <p className="cta-text">
            If you still have questions or need help, our support team is ready
            to assist you.
          </p>
          <div className="cta-buttons">
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
            <a href="mailto:support@go-rent.com">
              <Button variant="outline" size="lg">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
