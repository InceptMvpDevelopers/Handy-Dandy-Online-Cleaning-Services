import { supabase } from "@/integrations/supabase/client";
import {  toast } from 'sonner';

export const updateAddress = async ({
  address,
  userID,
}: {
  address: any;
  userID: string;
}) => {
  const { data, error } = await supabase
    .from("profiles")
    .update({ address })          // assumes "address" is a JSONB or TEXT column
    .eq("id", userID)             // change to "user_id" if needed
    .select();                    // optional: return the updated row(s)

  if (error) {
    toast.error(`Could not update: ${error.message}`);
    throw error;
  }

  if (data) {
    toast.success("Profile Updated Successfully");
  }

  return data;
};
