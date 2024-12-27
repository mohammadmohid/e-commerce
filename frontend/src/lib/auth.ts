"use client";

const BASE_URL = "http://localhost:5000";

interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  error?: string;
}

export async function signUp(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred during registration",
    };
  }
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "Login failed",
      };
    }

    // Store the JWT token securely
    localStorage.setItem("token", data.token);

    return {
      success: true,
      token: data.token,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred during login",
    };
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

export function signOut() {
  localStorage.removeItem("token");
  window.location.href = "/signin";
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  return !!token;
}
