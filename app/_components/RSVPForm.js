"use client";

import { Cinzel } from "next/font/google";
import { createRSVP } from "@/app/_lib/action/createRSVP";
import toast from "react-hot-toast";
import { useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function RSVPForm() {
  const [buttonText, setButtonText] = useState("Confirm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [countdown, setCountdown] = useState(3);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    setIsSubmitting(true);
    setButtonText("Confirming...");

    const result = await createRSVP(formData);

    if (result.success) {
      toast.success(result.message);
      setButtonText("Confirmed!");
      form.reset();

      setShowForm(false);
      setSuccessMessage(`Thank you, ${firstName} ${lastName}!`);

      let counter = 15;
      setCountdown(counter);
      const countdownInterval = setInterval(() => {
        counter--;
        setCountdown(counter);
      }, 1000);

      setTimeout(() => {
        clearInterval(countdownInterval);
        setButtonText("Confirm");
        setSuccessMessage("");
        setShowForm(true);
        setIsSubmitting(false);
      }, 15000);
    } else {
      toast.error(result.message);
      setButtonText("Try Again");
      setTimeout(() => {
        setButtonText("Confirm");
        setIsSubmitting(false);
      }, 2000);
    }
  }

  return (
    <div
      className={`${cinzel.className} flex flex-col items-center max-xl:pb-10`}
    >
      {!showForm && (
        <div className="text-center text-[#9a7e66] animate-fadeIn">
          <h2 className="text-lg max-md:text-[12px] font-bold">
            {successMessage}
          </h2>
          <p className="text-lg max-md:text-[12px] font-bold">
            Your attendance has been confirmed. See you on our wedding day!
          </p>
          <p className="text-lg max-md:text-[12px] text-[#9a7e66]">
            Returning to form in{" "}
            <span className="font-semibold">{countdown}</span>...
          </p>
        </div>
      )}

      {/* RSVP Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 w-full animate-fadeIn"
        >
          {/* First & Last Name Inputs */}
          <div className="flex gap-2 w-full max-lg:flex-col">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-lg max-md:text-sm whitespace-nowrap font-bold">
                First Name
              </label>
              <input
                name="firstName"
                placeholder="First Name"
                className="w-full text-base border border-[#9a7e66] bg-white text-[#7f523d] pl-5 max-md:pl-3 py-3 rounded-md outline-none placeholder:text-[#7f523d] max-md:py-2"
                style={{ fontSize: "16px" }} // ✅ Prevents zoom
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-lg max-md:text-sm whitespace-nowrap font-bold">
                Last Name
              </label>
              <input
                name="lastName"
                placeholder="Last Name"
                className="w-full text-base border border-[#9a7e66] bg-white text-[#7f523d] pl-5 max-md:pl-3 py-3 rounded-md outline-none placeholder:text-[#7f523d] max-md:py-2"
                style={{ fontSize: "16px" }} // ✅ Prevents zoom
                required
              />
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#9a7e66] text-lg font-bold max-md:text-[12px] w-full text-white py-4 px-10 cursor-pointer rounded-md transition-all duration-300 max-lg:py-3 max-lg:px-8 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "lg:hover:opacity-80"
            }`}
          >
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
}

export default RSVPForm;
