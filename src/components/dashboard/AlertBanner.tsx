"use client";

import { useState } from "react";

interface AlertBannerProps {
  variant: "warning" | "info";
  children: React.ReactNode;
  onDismiss?: () => void;
}

export default function AlertBanner({
  variant,
  children,
  onDismiss,
}: AlertBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  const variantStyles =
    variant === "warning"
      ? "border border-[#ff6b6b] bg-[#fff5f5]"
      : "border border-purple-alert-border bg-purple-alert-bg";

  const iconColor =
    variant === "warning" ? "#ff6b6b" : "#8f46e9";

  return (
    <div
      role="alert"
      className={`flex h-12 w-full items-center rounded-lg px-4 ${variantStyles}`}
    >
      {/* Left: info icon */}
      <div className="flex shrink-0 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke={iconColor}
            strokeWidth="1.5"
          />
          <rect
            x="7.25"
            y="7"
            width="1.5"
            height="4.5"
            rx="0.75"
            fill={iconColor}
          />
          <circle cx="8" cy="5" r="0.875" fill={iconColor} />
        </svg>
      </div>

      {/* Center: message text */}
      <div className="flex flex-1 items-center justify-center px-3">
        <span className="text-body-regular text-gray-850 text-center">
          {children}
        </span>
      </div>

      {/* Right: dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss alert"
        className="flex shrink-0 items-center justify-center rounded p-0.5 transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="#6b6b6b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
