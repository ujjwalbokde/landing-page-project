"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // Ensure supabase client is correctly initialized

// Define the types for user and session, allowing email to be undefined
interface User {
  id: string;
  email?: string; // email is now optional
  // Add other user properties here if needed
}

interface Session {
  user: User;
  access_token: string;
  // Add other session properties here if needed
}

interface UserContextProps {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user || null);
      setLoading(false); // Set loading to false after session is fetched
    };

    fetchSession();

    // Listen for session changes (e.g., login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setLoading(false); // Set loading to false after session changes
    });

    // Cleanup listener when the component is unmounted
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, session, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};