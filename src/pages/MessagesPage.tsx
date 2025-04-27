import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MessagesPage.css";

// Mock conversations data
const conversations = [
  {
    id: "conv1",
    otherUser: {
      id: "user2",
      name: "Emily Parker",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    lastMessage: {
      text: "That sounds perfect! I'll be there at 2pm to pick up the camera.",
      timestamp: "2025-04-26T14:30:00",
      isRead: true,
      sender: "other",
    },
    rental: {
      id: "rental1",
      title: "Canon EOS 5D Mark IV",
    },
    unreadCount: 0,
  },
  {
    id: "conv2",
    otherUser: {
      id: "user3",
      name: "Michael Thompson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    lastMessage: {
      text: "Is the projector still available for next weekend?",
      timestamp: "2025-04-26T10:15:00",
      isRead: false,
      sender: "other",
    },
    rental: {
      id: "listing1",
      title: "Professional Video Projector",
    },
    unreadCount: 2,
  },
  {
    id: "conv3",
    otherUser: {
      id: "user4",
      name: "Sophia Williams",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    lastMessage: {
      text: "Thanks for the quick response. The tent was in great condition!",
      timestamp: "2025-04-25T18:45:00",
      isRead: true,
      sender: "other",
    },
    rental: {
      id: "listing2",
      title: "Camping Tent (4-Person)",
    },
    unreadCount: 0,
  },
];

// Mock messages for the first conversation
const mockMessages = [
  {
    id: "msg1",
    text: "Hi there! I'm interested in renting your Canon EOS 5D Mark IV for a photoshoot next week.",
    timestamp: "2025-04-25T09:12:00",
    sender: "other",
  },
  {
    id: "msg2",
    text: "Hello! Thanks for your interest. The camera is available next week. Which days specifically were you looking to rent it?",
    timestamp: "2025-04-25T10:30:00",
    sender: "self",
  },
  {
    id: "msg3",
    text: "I was hoping to get it from April 15th to April 20th. Would that work for you?",
    timestamp: "2025-04-25T11:05:00",
    sender: "other",
  },
  {
    id: "msg4",
    text: "Yes, those dates work perfectly! The total would be $245 for the 5-day rental period.",
    timestamp: "2025-04-25T12:20:00",
    sender: "self",
  },
  {
    id: "msg5",
    text: "Great! How should we handle the pickup and return?",
    timestamp: "2025-04-25T13:40:00",
    sender: "other",
  },
  {
    id: "msg6",
    text: "I'm available for in-person pickup at my location in downtown San Francisco. Would that work for you?",
    timestamp: "2025-04-26T09:15:00",
    sender: "self",
  },
  {
    id: "msg7",
    text: "That sounds perfect! I'll be there at 2pm to pick up the camera.",
    timestamp: "2025-04-26T14:30:00",
    sender: "other",
  },
];

const MessagesPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();

    // If same day, return time only
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // If within the last week, return day name and time
    const daysDiff = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysDiff < 7) {
      return (
        date.toLocaleDateString([], { weekday: "short" }) +
        " " +
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }

    // Otherwise, return date and time
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!messageText.trim()) return;

    const newMessage = {
      id: `msg${messages.length + 1}`,
      text: messageText,
      timestamp: new Date().toISOString(),
      sender: "self" as const,
    };

    setMessages([...messages, newMessage]);
    setMessageText("");
  };

  return (
    <div className="messages-page">
      <div className="messages-container">
        <div className="conversations-sidebar">
          <div className="conversations-header">
            <h2>Messages</h2>
            <div className="conversation-actions">
              <button className="action-button">
                <svg
                  className="action-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="action-button">
                <svg
                  className="action-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="conversations-list">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${
                  selectedConversation.id === conversation.id ? "selected" : ""
                } ${conversation.unreadCount > 0 ? "unread" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="conversation-avatar">
                  <img
                    src={conversation.otherUser.avatar}
                    alt={conversation.otherUser.name}
                  />
                  <div className="online-indicator"></div>
                </div>
                <div className="conversation-content">
                  <div className="conversation-header">
                    <h3 className="conversation-name">
                      {conversation.otherUser.name}
                    </h3>
                    <span className="conversation-time">
                      {formatTimestamp(conversation.lastMessage.timestamp)}
                    </span>
                  </div>
                  <div className="conversation-footer">
                    <p className="conversation-preview">
                      {conversation.lastMessage.sender === "self"
                        ? "You: "
                        : ""}
                      {conversation.lastMessage.text.length > 45
                        ? conversation.lastMessage.text.substring(0, 45) + "..."
                        : conversation.lastMessage.text}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="unread-badge">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="message-main">
          {selectedConversation ? (
            <>
              <div className="message-header">
                <div className="message-header-user">
                  <img
                    src={selectedConversation.otherUser.avatar}
                    alt={selectedConversation.otherUser.name}
                    className="message-user-avatar"
                  />
                  <div className="message-user-info">
                    <h3>{selectedConversation.otherUser.name}</h3>
                    <p className="message-rental-info">
                      <span>Regarding:</span>{" "}
                      {selectedConversation.rental.title}
                    </p>
                  </div>
                </div>
                <div className="message-header-actions">
                  <Link
                    to={`/rental/${selectedConversation.rental.id}`}
                    className="view-listing-btn"
                  >
                    View Listing
                  </Link>
                  <button className="action-button">
                    <svg
                      className="action-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="message-content">
                <div className="message-date-separator">
                  <span>April 25, 2025</span>
                </div>

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${
                      message.sender === "self" ? "sent" : "received"
                    }`}
                  >
                    <div className="message-bubble">
                      <p>{message.text}</p>
                    </div>
                    <div className="message-info">
                      <span className="message-time">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {message.sender === "self" && (
                        <svg
                          className="read-icon"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="message-input-container"
                onSubmit={handleSendMessage}
              >
                <button type="button" className="attachment-button">
                  <svg
                    className="attachment-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <button type="submit" className="send-button">
                  <svg
                    className="send-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-state-content">
                <svg
                  className="empty-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h3>No conversation selected</h3>
                <p>Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
