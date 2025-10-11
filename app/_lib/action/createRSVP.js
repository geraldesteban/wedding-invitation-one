"use server";

import supabase from "@/app/_lib/config/supabase";

export async function createRSVP(formData) {
  const newRSVPData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };

  const { error } = await supabase.from("rsvp").insert([newRSVPData]);

  if (error) {
    console.error("Supabase error:", error);
    return { success: false, message: "RSVP could not be created" };
  }

  return { success: true, message: `Thank you ${firstName} ${lastName}!` };
}
