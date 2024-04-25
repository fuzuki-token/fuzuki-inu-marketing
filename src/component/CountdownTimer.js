import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetTime = moment.tz("2024-04-25 17:45:00", "Asia/Kolkata"); // Set the target time in IST
    const interval = setInterval(() => {
      const now = moment(); // Current time in UTC
      const duration = moment.duration(targetTime.diff(now));

      // Format duration
      const timeString = `${duration.hours()}H : ${duration.minutes()}M : ${duration.seconds()}S`;

      // Update state
      setTimeLeft(timeString);

      // Check if the countdown is over
      const timeStrings = `${0}H : ${0}M : ${0}S`;

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setTimeLeft(timeStrings);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="Hour">{timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
