"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Authcontext";
import Link from "next/link";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;
type LoginData = z.infer<typeof loginSchema>;

export default function TestFormPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });
  const loginForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const { signup, login, logout, user, fetchUser } = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState<typeof user | null>(null);

  // Only sync userDetails with user from context
  React.useEffect(() => {
    setUserDetails(user);
  }, [user]);

  const onSubmit = async (data: FormData) => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const u = await signup(data);
      setSuccess("Signup successful!");
      setUserDetails(u);
    } catch (err: any) {
      setError(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (data: LoginData) => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const u = await login(data.email, data.password);
      setSuccess("Login successful!");
      setUserDetails(u);
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setUserDetails(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
         <Link href={"/test2"}>Go to Test 2</Link>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Auth Demo</h2>
        {userDetails ? (
          <>
            <div className="mb-4 text-center">
              <div className="font-bold text-lg mb-2">User Details</div>
              <div><b>Email:</b> {userDetails.email}</div>
              <div><b>First Name:</b> {userDetails.firstName || '-'}</div>
              <div><b>Last Name:</b> {userDetails.lastName || '-'}</div>
              <div><b>Phone:</b> {userDetails.phone || '-'}</div>
              <div><b>User ID:</b> {userDetails.id}</div>
            </div>
            <Button onClick={handleLogout} className="w-full mt-2" disabled={loading}>
              {loading ? 'Logging out...' : 'Logout'}
            </Button>
          </>
        ) : (
          <>
            <div className="mb-6">
              <div className="font-bold text-lg mb-2">Login</div>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className={fieldState.error ? "border-red-500" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                            className={fieldState.error ? "border-red-500" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-2" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="font-bold text-lg mb-2">Or Sign Up</div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          {...field}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your last name"
                          {...field}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          {...field}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-2" disabled={loading}>
                  {loading ? 'Signing up...' : 'Sign Up'}
                </Button>
              </form>
            </Form>
          </>
        )}
        {error && <div className="text-red-600 text-sm text-center mt-4">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center mt-4">{success}</div>}
      </div>
    </div>
  );
}
