import { COOKIE_NAME } from "../../constants";
import { defaultInstance } from "../../configs/axios";

interface AuthResponse {
  code: string;
  token: string;
}

export const authService = {
  async googleSignIn(): Promise<AuthResponse> {
    try {
      // Replace with your actual API endpoint
      const response = await defaultInstance.post<AuthResponse>("/auth/google");
      return response.data;
    } catch (error) {
      console.error("Google sign-in failed:", error);
      throw error;
    }
  },

  async generateNewCode(): Promise<string> {
    try {
      // Replace with your actual API endpoint
      const response = await defaultInstance.post<{ code: string }>(
        "/auth/new-code"
      );
      return response.data.code;
    } catch (error) {
      console.error("Code generation failed:", error);
      throw error;
    }
  },

  // Helper to get cookie
  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
    return null;
  },

  // Helper to set cookie
  setCookie(name: string, value: string, expiryHours: number = 24): void {
    const date = new Date();
    date.setTime(date.getTime() + expiryHours * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  },
};
