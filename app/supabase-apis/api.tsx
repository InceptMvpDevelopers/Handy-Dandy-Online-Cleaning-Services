import { supabase } from "@/integrations/supabase/client";
import {  toast } from 'sonner';
import { ApplyFormState } from "@/store/applyFormSlice";



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


export const addOrderApplyForm = async (applyForm: ApplyFormState, user_id: string) => {
  // Insert main order

  const { data, error } = await supabase
    .from("order")
    .insert({
      selected_hours: applyForm.selectedHours,
      professionals_count: applyForm.professionalsCount,
      need_materials: applyForm.needMaterials === 'yes',
      instructions: applyForm.instructions,
      selected_frequency: applyForm.selectedFrequency,
      total: applyForm.total,
      discount: applyForm.discount,
      grand_total: applyForm.grandTotal,
      selected_date: applyForm.selectedDate,
      selected_time: applyForm.selectedTime,
      related_service: applyForm.selectedService?.id,
      user_id
    })
    .select()
    .single();

  if (error) {
    console.error("Order insert failed:", error);
    throw new Error("Order insert failed");
  }

  const orderId = data.id;

  // Insert each selected add-on linked to this order
  for (const item of applyForm.selectedAddOns) {
    const { addon, quantity } = item;

    const { error } = await supabase.from("order_selected_addons").insert({
      quantity,
      related_order: orderId,
      addon_reference: addon.id,
    });

    if (error) {
      console.error(`Failed to insert addon ${addon.id}:`, error);
    }
  }

  return orderId;
};
