import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useAuth } from '@/context/Authcontext';
import { toast, Toaster } from "sonner";
import { Checkbox } from '../ui/checkbox';

const loginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login } = useAuth();

  const onSubmit = async (data: LoginData) => {
    try {
      await login(data.email, data.password);
      toast.success("Login successful!");
      onClose();
      form.reset();
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="flex flex-col bg-white p-6 rounded-lg flex-1 max-w-[400px] min-w-[350px] shadow-2xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <button
        onClick={onClose}
        className="self-end text-2xl text-gray-400 hover:text-gray-600 mb-3 right-6 top-6"
      >
        <Toaster position="top-right" richColors />
        <MdClose />
      </button>
      <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-3xl font-bold">LOGIN</span>
                          <div className="text-sm italic text-gray-500 mt-1">
                  DON'T HAVE AN ACCOUNT? {' '}
                  <span className="text-blue-600 font-semibold cursor-pointer">Signup</span>
          </div>
              </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className={`focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
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
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className={`focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

                    <div className="flex items-center justify-between mt-2">
                            <label className="flex items-center gap-2 text-gray-500 text-sm">
                              <Checkbox
                                // checked={form.keepLoggedIn}
                                // onCheckedChange={(checked) => setForm((prev) => ({ ...prev, keepLoggedIn: !!checked }))}
                                id="keepLoggedIn"
                              />
                              Keep me logged in
                            </label>
                            <span className="text-blue-600 text-sm font-medium cursor-pointer">Forgot Password?</span>
                          </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 mt-2"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </Modal>
  );
}
