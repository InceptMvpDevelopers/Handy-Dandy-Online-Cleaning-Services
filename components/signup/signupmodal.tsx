import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useAuth } from '@/context/Authcontext';
import { supabase } from '@/integrations/supabase/client';
import { toast, Toaster } from "sonner";
import axios from "axios";
import { updateAddress } from '@/app/supabase-apis/api';

const aaqib = z.object({
    firstName: z.string().min(2, "First Name is Required"),
    lastName: z.string().min(2, "Last Name is Required"),
    email: z.string().email("Invalid Email"),
    phone: z.string().min(8, "Phone no. is too small").max(20, "Phone no. is too large"),
    password: z.string()
    .min(8, "Password must be at least 8 characters")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[^a-zA-Z0-9]/.test(val), {
      message: "Password must contain at least one special character",
    })
})

type FormData = z.infer<typeof aaqib>

const steps = [
  'Sign Up',
  'Verify Phone',
  'Select Address',
];

export default function SignupModal({
  open,
  onClose,
  showLogin
}: {
  open: boolean;
  onClose: () => void;
  showLogin: ()=> void;
}) {

const formm = useForm<FormData>({
    resolver: zodResolver(aaqib),
      mode: "onTouched",
});


  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    keepLoggedIn: false,
  });
  const [otpToSend, SetOtpToSend] = useState('');
  const [otp, setOtp] = useState('');
  const [otpTimer, setOtpTimer] = useState(30);
  const [address, setAddress] = useState('');
  const [pin, setPin] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to SF
  const { signup, user } = useAuth();

  // OTP timer effect
  useEffect(() => {
    if (step === 1 && otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, otpTimer]);

  // Reset state on open/close
  useEffect(() => {
    if (!open) {
      setStep(0);
      setOtp('');
      setOtpTimer(30);
    }
  }, [open]);

  
const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

const sendOTP = async ({email}: {email:string}) => {
  const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
       SetOtpToSend(randomOtp);
console.log(randomOtp);

      //send email 
      try {
           
        const sendEmail = await axios.post("https://staysavvy-44985.bubbleapps.io/version-test/api/1.1/wf/send_email/",
        {email: email,
          otp: randomOtp
        }
        );
         console.log("Email sent successfully:");
    toast.success("OTP sent to email");
      
      } catch (error) {
        toast.error("Failed to send OTP email");
      }
}

  const handleContinue = async () => {
    if (step === 0) {
      // Validate form first
      const isValid = await formm.trigger();
      if (!isValid) return;
      const email = formm.getValues("email");
      // Check if email exists in Supabase auth.users
      console.log("email is:", email);
      
      const { data, error } = await supabase.from("profiles").select("*").eq("email", email);
console.log(data);

      if (error) {
  console.error("Error checking user existence:", error);
  // optionally: show error toast
  return;
}

      const userExists = data.length > 0;
      if (userExists) {
        console.log("sorry ");
        
      toast.error("User with this email already exists");
        return;
      }
sendOTP({email});
   
      setStep(1);
    } else if (step === 1) setStep(2);
    else onClose();
  };

  // Progress bar logic
  const progressColors = [
    'bg-blue-600',
    step > 0 ? 'bg-blue-600' : 'bg-gray-200',
    step > 1 ? 'bg-blue-600' : 'bg-gray-200',
  ];

  // Map placeholder (replace with real map integration as needed)
  const MapPlaceholder = () => (
    <div className="w-full h-72 bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
      <img
        src="https://maps.googleapis.com/maps/api/staticmap?center=37.7749,-122.4194&zoom=14&size=600x300&markers=color:blue%7C37.7749,-122.4194"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="flex flex-col bg-white p-6 rounded-lg flex-1 max-w-[782px] min-w-[350px] shadow-2xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <button
        onClick={onClose}
        className="self-end text-2xl text-gray-400 hover:text-gray-600 mb-3 right-6 top-6"
      >
         <Toaster position="top-right" richColors />
        <MdClose />
      </button>
      {/* Progress Bar */}
      <div className="flex gap-2 w-full mt-2 mb-8">
        {progressColors.map((color, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${color}`}
          />
        ))}
      </div>
      {/* Step Content */}
      {step === 0 && (
        <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-3xl font-bold">SIGN UP</span>
              <div onClick={showLogin} className="text-sm italic text-gray-500 mt-1">
                ALREADY HAVE AN ACCOUNT? {' '}
                <span className="text-blue-600 font-semibold cursor-pointer">Signin</span>
              </div>
            </div>
          </div>
          <Form {...formm}>
            <form
              onSubmit={e => { e.preventDefault(); handleContinue(); }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-2 mb-2">
                <FormField
                  control={formm.control}
                  name="firstName"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-1/2">
                      <FormControl>
                        <Input
                          placeholder="Write your first name"
                          {...field}
                          className={`  rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formm.control}
                  name="lastName"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-1/2">
                      <FormControl>
                        <Input
                          placeholder="Write your last name"
                          {...field}
                          className={` focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={formm.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className={` focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formm.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your Phone number"
                        {...field}
                        className={` focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formm.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        className={` focus-visible:ring-0 rounded-full px-6 py-4 text-lg bg-[#fafbfc] border ${fieldState.error ? 'border-red-500' : 'border-gray-200'}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center gap-2 text-gray-500 text-sm">
                  <Checkbox
                    checked={form.keepLoggedIn}
                    onCheckedChange={(checked) => setForm((prev) => ({ ...prev, keepLoggedIn: !!checked }))}
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
                Continue
              </Button>
            </form>
          </Form>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
          <div>
            <span className="text-3xl font-bold">VERIFY PHONE NUMBER</span>
            <div className="text-gray-500 mt-1">Please enter the code that was sent to</div>
            <div className="text-lg font-semibold mt-2">{formm.getValues("email")}</div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <InputOTP
              maxLength={4}
              value={otp}
              onChange={setOtp}
              containerClassName="gap-4"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <div className="text-gray-500 text-sm mt-2">
              {otpTimer > 0 ? (
                <>Resend code in <span className="font-semibold">00:{otpTimer.toString().padStart(2, '0')}</span></>
              ) : (
                <button
                  className="text-blue-600 underline font-medium px-2 py-1"
                  type="button"
                  onClick={async () => {
                    await sendOTP({ email: formm.getValues("email") });
                    setOtp("");
                    setOtpTimer(30);
                  }}
                >
                  Resend Email
                </button>
              )}
            </div>
          </div>
          <Button
            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 mt-2"
            onClick={async () => {
              if (otpTimer <= 0) {
                toast.error("OTP expired. Please resend email.");
                return;
              }
              if (otp === otpToSend) {
                // Do signup here
                try {
                  const email = formm.getValues("email");
                  const password = formm.getValues("password");
                  const firstName = formm.getValues("firstName");
                  const lastName = formm.getValues("lastName");
                  const phone = formm.getValues("phone");
                  await signup({ email, password, firstName, lastName, phone });
                  toast.success("Signup successful!");
                  setStep(2);
                  formm.reset();
                } catch (err) {
                  toast.error("Signup failed. Please try again.");
                }
              } else {
                toast.error("Invalid OTP. Please check the code and try again.");
              }
            }}
            disabled={otp.length < 4}
          >
            Verify Number
          </Button>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
          <div>
            <span className="text-3xl font-bold">SELECT ADDRESS</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center mb-2">
              <Input
                placeholder="search for area, street, name, lane"
                className="rounded-full px-6 py-4 text-lg bg-[#fafbfc] border border-gray-200 pr-36"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-100 text-blue-600 font-semibold px-6 py-2"
                type="button"
                onClick={() => {/* set my location logic */}}
              >
                Set my location
              </Button>
            </div>
            <MapPlaceholder />
          </div>
          <Button
            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 mt-2"
            onClick={async () => {
              if (!user) {
                toast.error('User not found. Please sign in again.');
                return;
              }
              // Build the address object from state
              const addressObj = { address, pin };
              try {
                await updateAddress({ address: addressObj, userID: user.id });
                toast.success('Address updated successfully!');
                onClose();
              } catch (error: any) {
                toast.error('Failed to update address: ' + error.message);
              }
            }}
          >
            Confirm Pin location
          </Button>
        </div>
      )}
    </Modal>
  );
}
