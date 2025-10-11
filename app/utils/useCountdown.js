"use client";
import { useEffect, useState } from "react";

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let isMounted = true;

    const updateCountdown = () => {
      const now = new Date();
      const totalSeconds = Math.floor((targetDate - now) / 1000);

      if (!isMounted) return;

      if (totalSeconds <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = String(
        Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((totalSeconds % (60 * 60)) / 60)
      ).padStart(2, "0");
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [targetDate]);

  return timeLeft;
}
