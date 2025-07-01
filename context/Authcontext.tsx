"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

// User type
export type AuthUser = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
};

// Context value type
interface AuthContextType {
  user: AuthUser | null;
  signup: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) => Promise<AuthUser | null>;
  login: (email: string, password: string) => Promise<AuthUser | null>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<AuthUser | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userFetched, setUserFetched] = useState(false);

  // Fetch user details from Supabase (with caching)
  const fetchUser = async (): Promise<AuthUser | null> => {
    console.log('[AuthContext] fetchUser called');
    console.log("use found? ", user);
    
    if (user) {
      console.log('[AuthContext] fetchUser: returning cached user', user);
      return user;
    }
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      console.log('[AuthContext] fetchUser: error or no user', error);
      return null;
    }
    const { id, email, user_metadata } = data.user;
    const fetchedUser: AuthUser = {
      id,
      email: email || '',
      firstName: user_metadata?.firstName,
      lastName: user_metadata?.lastName,
      phone: user_metadata?.phone,
    };
    setUser(fetchedUser);
    setUserFetched(true);
    console.log('[AuthContext] fetchUser: fetched and set user', fetchedUser);
    return fetchedUser;
  };

  const login = async (email: string, password: string): Promise<AuthUser | null> => {
    console.log('[AuthContext] login called', { email });
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      console.log('[AuthContext] login error', error);
      throw error || new Error('Login failed');
    }
    // Fetch full user details (including metadata)
    const { id, email: userEmail, user_metadata } = data.user;
    const loggedInUser: AuthUser = {
      id,
      email: userEmail || email,
      firstName: user_metadata?.firstName,
      lastName: user_metadata?.lastName,
      phone: user_metadata?.phone,
    };
    setUser(loggedInUser);
    setUserFetched(true);
    console.log('[AuthContext] login: set user', loggedInUser);
    return loggedInUser;
  };

  const signup = async ({ email, password, firstName, lastName, phone }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
  }): Promise<AuthUser | null> => {
    console.log('[AuthContext] signup called', { email, firstName, lastName, phone });
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          phone,
        },
      },
    });
    if (error) {
      console.log('[AuthContext] signup error', error);
      throw error;
    }
    const user = data.user;

    if(user){

      const { error: insertError } = await supabase.from('profiles').insert({
      id: user.id,            // This must match `auth.users.id`
      email,                  // You said you added email to profiles
      first_name: firstName,
      last_name: lastName,
      phone,
    });

    if (insertError) {
      console.error('[AuthContext] Failed to insert profile:', insertError);
      // Optionally: delete user if profile creation fails?
    }

      const newUser: AuthUser = {
        id: user.id,
        email: user.email || email,
        firstName,
        lastName,
        phone,
      };
      setUser(newUser);
      setUserFetched(true);
      console.log('[AuthContext] signup: set user', newUser);
      return newUser;
    }
    return null;
  };

  const logout = async () => {
    console.log('[AuthContext] logout called');
    await supabase.auth.signOut();
    setUser(null);
    setUserFetched(false);
    console.log('[AuthContext] logout: cleared user');
  };

  // On mount, check if user is already logged in
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}