"use client";

import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const { user, loading } = useUser();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if no user found
    }
  }, [user, loading, router]);
  
  // Handle logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-6 flex flex-col items-center">
      <div className="max-w-md w-full rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-400 mb-4">
          Welcome to the Profile Page, {user?.email}
        </h1>

        <div className="text-center mb-6">
          <p className="text-gray-500">
            This is your Profile. Here you can access your account details and more.
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
