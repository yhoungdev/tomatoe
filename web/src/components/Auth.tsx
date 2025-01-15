import React, { useState } from "react";
import { COOKIE_NAME } from "../../constants";
import { authService } from "../services/auth";

export const Auth: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");
      const { token, code } = await authService.googleSignIn();
      authService.setCookie(COOKIE_NAME, token);
      setCode(code);
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateNewCode = async () => {
    try {
      setIsLoading(true);
      setError("");
      const newCode = await authService.generateNewCode();
      setCode(newCode);
    } catch (err) {
      setError("Failed to generate new code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Connect Your TV</h2>
        <p className="text-white/70">
          Sign in with Google to get your connection code
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {!code ? (
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 rounded-lg px-4 py-3 font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <span className="animate-spin">↻</span>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            Sign in with Google
          </button>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-5xl font-mono tracking-wider text-white font-bold">
              {code.split("").map((digit, index) => (
                <span
                  key={index}
                  className="inline-block w-12 h-16 bg-white/10 rounded-lg mx-1 pt-4"
                >
                  {digit}
                </span>
              ))}
            </div>
            <p className="text-white/70">
              Enter this code on your TV to connect
            </p>
            <button
              onClick={handleGenerateNewCode}
              disabled={isLoading}
              className="text-[#FF6B6B] hover:text-[#FF6B6B]/80 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Generating..." : "Generate New Code"}
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="font-semibold text-lg">How to connect:</h3>
        <ol className="list-decimal list-inside space-y-2 text-white/70">
          <li>Sign in with your Google account</li>
          <li>Get your unique 6-digit code</li>
          <li>Open Tomatoe app on your Android TV</li>
          <li>Enter the code on your TV</li>
          <li>Start sending messages!</li>
        </ol>
      </div>
    </div>
  );
};
