"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(5 * 86400 + 23 * 3600 + 59 * 60 + 35);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => Math.max(t - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const [d, h, m, s] = [
    Math.floor(time / 86400),
    Math.floor((time % 86400) / 3600),
    Math.floor((time % 3600) / 60),
    time % 60,
  ];

  return (
    <div className="flex gap-[24px] text-black">
      <div className="flex flex-col items-center justify-center bg-white rounded-full text-center w-[90px] h-[90px]">
        <div className="text-base font-semibold">{pad(d)}</div>
        <div className="text-xs	font-normal">Days</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-full text-center w-[90px] h-[90px]">
        <div className="text-base font-semibold">{pad(h)}</div>
        <div className="text-xs	font-normal">Hours</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-full text-center w-[90px] h-[90px]">
        <div className="text-base font-semibold">{pad(m)}</div>
        <div className="text-xs	font-normal">Minutes</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-full text-center w-[90px] h-[90px]">
        <div className="text-base font-semibold">{pad(s)}</div>
        <div className="text-xs	font-normal">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
