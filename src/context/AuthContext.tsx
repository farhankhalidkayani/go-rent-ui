import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";

// Define user interface
interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  bio?: string;
}

// Define profile update data interface
interface ProfileUpdateData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bio: string;
}

// Define registration data interface
interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Define authentication context interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    email: string,
    password: string,
    rememberMe?: boolean
  ) => Promise<boolean>;
  register: (data: RegistrationData) => Promise<boolean>;
  updateProfile: (data: ProfileUpdateData) => Promise<boolean>;
  logout: () => void;
  error: string | null;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => Promise.resolve(false),
  register: () => Promise.resolve(false),
  updateProfile: () => Promise.resolve(false),
  logout: () => {},
  error: null,
});

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing user session on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check if user is authenticated
        if (authService.isAuthenticated()) {
          const userStr = localStorage.getItem("user");
          if (userStr) {
            const userData = JSON.parse(userStr);
            setUser(userData);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Failed to restore authentication state:", error);
        // If there's an issue with stored credentials, clear them
        authService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (
    email: string,
    password: string,
    rememberMe = false
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Use the authService to handle login
      const response = await authService.login({
        email,
        password,
        rememberMe,
      });

      setUser(response.user);
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during login";
      setError(errorMessage);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (data: RegistrationData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Use the authService to handle registration
      const response = await authService.register(data);

      setUser(response.user);
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during registration";
      setError(errorMessage);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (data: ProfileUpdateData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, you would call an API here
      // For now, we'll just update the local state
      if (user) {
        const updatedUser = {
          ...user,
          ...data,
        };

        // Save updated user to localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsLoading(false);
        return true;
      }

      throw new Error("User not authenticated");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred while updating profile";
      setError(errorMessage);
      setIsLoading(false);
      return false;
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
