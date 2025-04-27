import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Define interfaces for authentication data
interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

// Create API instance with base URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

// Handle token refresh
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // If error is 401 and not already retrying
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          // No refresh token available, logout
          authService.logout();
          return Promise.reject(error);
        }

        // Try to refresh the token
        const response = await axios.post(`${API_URL}/auth/refresh`, {
          refreshToken,
        });

        if (response.data.token) {
          // Store new tokens
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          // Update header and retry
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, logout user
        authService.logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Always use mock mode for testing UI
const USE_MOCK = true; // Force mock mode to be true

const authService = {
  // Login function - always use mock authentication
  login: async (data: LoginData): Promise<AuthResponse> => {
    try {
      // Always use mock login for UI testing
      console.log("Using mock authentication");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

      const mockToken = "mock-jwt-token";
      const mockRefreshToken = "mock-refresh-token";
      const mockUser = {
        id: "123",
        email: data.email || "test@example.com",
        firstName: "Test",
        lastName: "User",
      };

      localStorage.setItem("token", mockToken);
      localStorage.setItem("refreshToken", mockRefreshToken);
      localStorage.setItem("user", JSON.stringify(mockUser)); // Always store user data

      return {
        token: mockToken,
        refreshToken: mockRefreshToken,
        user: mockUser,
      };
    } catch (error) {
      console.error("Login error:", error);
      // Instead of throwing errors, return mock data anyway
      const mockToken = "mock-jwt-token";
      const mockRefreshToken = "mock-refresh-token";
      const mockUser = {
        id: "123",
        email: "test@example.com",
        firstName: "Test",
        lastName: "User",
      };

      localStorage.setItem("token", mockToken);
      localStorage.setItem("refreshToken", mockRefreshToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      return {
        token: mockToken,
        refreshToken: mockRefreshToken,
        user: mockUser,
      };
    }
  },

  // Register function - always use mock registration
  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      // Always use mock registration for UI testing
      console.log("Using mock registration");
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockToken = "mock-jwt-token";
      const mockRefreshToken = "mock-refresh-token";
      const mockUser = {
        id: "123",
        email: data.email || "test@example.com",
        firstName: data.firstName || "Test",
        lastName: data.lastName || "User",
      };

      localStorage.setItem("token", mockToken);
      localStorage.setItem("refreshToken", mockRefreshToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      return {
        token: mockToken,
        refreshToken: mockRefreshToken,
        user: mockUser,
      };
    } catch (error) {
      console.error("Registration error:", error);
      // Instead of throwing errors, return mock data anyway
      const mockToken = "mock-jwt-token";
      const mockRefreshToken = "mock-refresh-token";
      const mockUser = {
        id: "123",
        email: "test@example.com",
        firstName: "Test",
        lastName: "User",
      };

      localStorage.setItem("token", mockToken);
      localStorage.setItem("refreshToken", mockRefreshToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      return {
        token: mockToken,
        refreshToken: mockRefreshToken,
        user: mockUser,
      };
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("token");
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },

  // Logout function
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<boolean> => {
    try {
      console.log("Using mock forgot password for:", email);
      await new Promise((resolve) => setTimeout(resolve, 800));
      return true;
    } catch (error) {
      console.error("Forgot password error:", error);
      throw error;
    }
  },

  // Reset password
  resetPassword: async (
    token: string,
    newPassword: string
  ): Promise<boolean> => {
    try {
      console.log("Using mock password reset with token:", token);
      await new Promise((resolve) => setTimeout(resolve, 800));
      return true;
    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (userData: any): Promise<any> => {
    try {
      console.log("Using mock profile update:", userData);
      await new Promise((resolve) => setTimeout(resolve, 800));

      const currentUser = authService.getCurrentUser() || {};
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      return updatedUser;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  },
};

export default authService;
