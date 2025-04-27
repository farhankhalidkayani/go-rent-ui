import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TransactionsPage.css";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "payment" | "payout" | "refund" | "fee";
  status: "completed" | "pending" | "failed";
  relatedItemId?: string;
  relatedItemName?: string;
}

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: new Date(new Date().setMonth(new Date().getMonth() - 3))
      .toISOString()
      .split("T")[0],
    end: new Date().toISOString().split("T")[0],
  });

  // Mock data - in a real app, this would fetch from an API
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockTransactions: Transaction[] = [
        {
          id: "t1",
          date: "2025-04-20",
          description: "Rental payment for DSLR Camera",
          amount: 250.0,
          type: "payment",
          status: "completed",
          relatedItemId: "l1",
          relatedItemName: "Professional DSLR Camera",
        },
        {
          id: "t2",
          date: "2025-04-15",
          description: "Payout for Mountain Bike rental",
          amount: 162.0,
          type: "payout",
          status: "completed",
          relatedItemId: "l2",
          relatedItemName: "Mountain Bike",
        },
        {
          id: "t3",
          date: "2025-04-05",
          description: "Platform fee for DSLR Camera rental",
          amount: -25.0,
          type: "fee",
          status: "completed",
          relatedItemId: "l1",
          relatedItemName: "Professional DSLR Camera",
        },
        {
          id: "t4",
          date: "2025-03-30",
          description: "Payout for Projector rental",
          amount: 108.0,
          type: "payout",
          status: "pending",
          relatedItemId: "l5",
          relatedItemName: "HD Projector",
        },
        {
          id: "t5",
          date: "2025-03-25",
          description: "Refund for canceled Camping Tent booking",
          amount: 120.0,
          type: "refund",
          status: "completed",
          relatedItemId: "l3",
          relatedItemName: "Camping Tent",
        },
        {
          id: "t6",
          date: "2025-03-10",
          description: "Payment processing failure",
          amount: 45.0,
          type: "payment",
          status: "failed",
          relatedItemId: "l4",
          relatedItemName: "Power Drill Set",
        },
      ];

      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);

    // Filter by date range
    const isInDateRange =
      transactionDate >= startDate && transactionDate <= endDate;

    // Filter by type
    const matchesType = filter === "all" || transaction.type === filter;

    return isInDateRange && matchesType;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const formatAmount = (amount: number, type: string) => {
    // For payments, we show negative amount (money out)
    // For payouts/refunds, we show positive amount (money in)
    const adjustedAmount =
      type === "payment" || type === "fee"
        ? -Math.abs(amount)
        : Math.abs(amount);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(adjustedAmount);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "pending":
        return "status-pending";
      case "failed":
        return "status-failed";
      default:
        return "";
    }
  };

  const getTypeClass = (type: string) => {
    switch (type) {
      case "payment":
        return "type-payment";
      case "payout":
        return "type-payout";
      case "refund":
        return "type-refund";
      case "fee":
        return "type-fee";
      default:
        return "";
    }
  };

  // Calculate totals
  const totalEarnings = filteredTransactions
    .filter(
      (t) =>
        (t.type === "payout" || t.type === "refund") && t.status === "completed"
    )
    .reduce((sum, t) => sum + t.amount, 0);

  const totalSpent = filteredTransactions
    .filter(
      (t) =>
        (t.type === "payment" || t.type === "fee") && t.status === "completed"
    )
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalEarnings - Math.abs(totalSpent);

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="transactions-page">
      <div className="container">
        <div className="page-header">
          <h1>My Transactions</h1>
          <p>View your payment history and earnings</p>
        </div>

        <div className="dashboard-navigation">
          <Link to="/dashboard" className="dashboard-link">
            Dashboard
          </Link>
          <Link to="/profile" className="dashboard-link">
            Profile
          </Link>
          <Link to="/bookings" className="dashboard-link">
            Bookings
          </Link>
          <Link to="/my-listings" className="dashboard-link">
            My Listings
          </Link>
          <Link to="/reviews" className="dashboard-link">
            Reviews
          </Link>
          <Link to="/transactions" className="dashboard-link active">
            Transactions
          </Link>
        </div>

        <div className="transactions-content">
          <div className="transaction-summary">
            <div className="summary-card">
              <h3>Total Earnings</h3>
              <div className="summary-amount positive">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalEarnings)}
              </div>
            </div>
            <div className="summary-card">
              <h3>Total Spent</h3>
              <div className="summary-amount negative">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(Math.abs(totalSpent))}
              </div>
            </div>
            <div className="summary-card">
              <h3>Balance</h3>
              <div
                className={`summary-amount ${
                  balance >= 0 ? "positive" : "negative"
                }`}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(balance)}
              </div>
            </div>
          </div>

          <div className="filters-row">
            <div className="date-filters">
              <div className="date-range">
                <label>From:</label>
                <input
                  type="date"
                  name="start"
                  value={dateRange.start}
                  onChange={handleDateRangeChange}
                />
              </div>
              <div className="date-range">
                <label>To:</label>
                <input
                  type="date"
                  name="end"
                  value={dateRange.end}
                  onChange={handleDateRangeChange}
                />
              </div>
            </div>

            <div className="type-filters">
              <button
                className={filter === "all" ? "filter-active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={filter === "payment" ? "filter-active" : ""}
                onClick={() => setFilter("payment")}
              >
                Payments
              </button>
              <button
                className={filter === "payout" ? "filter-active" : ""}
                onClick={() => setFilter("payout")}
              >
                Payouts
              </button>
              <button
                className={filter === "refund" ? "filter-active" : ""}
                onClick={() => setFilter("refund")}
              >
                Refunds
              </button>
              <button
                className={filter === "fee" ? "filter-active" : ""}
                onClick={() => setFilter("fee")}
              >
                Fees
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="loading">Loading your transactions...</div>
          ) : filteredTransactions.length > 0 ? (
            <div className="transactions-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{formatDate(transaction.date)}</td>
                      <td>
                        {transaction.relatedItemId ? (
                          <Link to={`/rentals/${transaction.relatedItemId}`}>
                            {transaction.description}
                          </Link>
                        ) : (
                          transaction.description
                        )}
                      </td>
                      <td>
                        <span
                          className={`type-badge ${getTypeClass(
                            transaction.type
                          )}`}
                        >
                          {transaction.type.charAt(0).toUpperCase() +
                            transaction.type.slice(1)}
                        </span>
                      </td>
                      <td
                        className={
                          transaction.type === "payment" ||
                          transaction.type === "fee"
                            ? "amount-negative"
                            : "amount-positive"
                        }
                      >
                        {formatAmount(transaction.amount, transaction.type)}
                      </td>
                      <td>
                        <span
                          className={`status-badge ${getStatusClass(
                            transaction.status
                          )}`}
                        >
                          {transaction.status.charAt(0).toUpperCase() +
                            transaction.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <h3>No transactions found</h3>
              <p>No transactions match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
