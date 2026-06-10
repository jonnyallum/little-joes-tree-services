"use client";

import { useState, useEffect } from "react";
import { GalleryClient } from "@/components/gallery/gallery-client";
import { Lock, LogOut } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real production app, this would be a server-side check.
    // For a low-cost static site, we use an environment variable.
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    
    if (password === adminPass) {
      setIsAuthenticated(true);
      localStorage.setItem("admin_auth", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-bone flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-card p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-emerald/10 rounded-full">
              <Lock className="w-8 h-8 text-emerald" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-forest text-center mb-2">Admin Access</h1>
          <p className="text-bone-600 text-center mb-8">Enter your password to manage the gallery.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-bone-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-bone-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-emerald text-white font-semibold rounded-lg hover:shadow-glow-emerald transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bone pb-20">
      <div className="bg-white border-b border-bone-200 mb-8">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-forest">Admin Dashboard</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-bone-600 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
      <GalleryClient isAdmin={true} />
    </main>
  );
}
