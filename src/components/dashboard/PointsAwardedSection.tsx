const PROGRESS_PERCENT = 22;

export default function PointsAwardedSection() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Points Awarded</h2>
        <p className="text-body-regular text-gray-500">
          What&apos;s going on today in GenLayer?
        </p>
      </div>

      {/* Dark card */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-gray-950"
        style={{ minHeight: "651px" }}
      >
        {/* Decorative gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 40% at 15% 20%, rgba(167, 138, 248, 0.18) 0%, transparent 70%),
              radial-gradient(ellipse 45% 35% at 85% 15%, rgba(190, 143, 245, 0.12) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 50% 85%, rgba(158, 75, 246, 0.10) 0%, transparent 70%),
              radial-gradient(ellipse 35% 45% at 80% 65%, rgba(172, 109, 243, 0.09) 0%, transparent 60%)
            `,
          }}
        />

        {/* Card content */}
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-8 py-16">
          {/* Pill badge */}
          <div
            className="flex items-center gap-2 rounded-full border px-3"
            style={{
              height: "40px",
              background: "rgba(255,255,255,0.10)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            {/* GL monogram icon (inline, white, works on dark bg) */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5" />
              <path
                d="M9.5 6.5H7.5V9.5H9.5V8.5H8.5V8H9.5V6.5Z"
                fill="white"
              />
              <path d="M5.5 6.5H6.5V9.5H5.5V6.5Z" fill="white" />
            </svg>
            <span className="text-label text-white">163 Points to Rank #6</span>
          </div>

          {/* Large display: icon + headline */}
          <div className="flex flex-col items-center gap-4">
            {/* GL hero icon — white ring with GL mark, 107px */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 107,
                height: 107,
                background:
                  "linear-gradient(135deg, rgba(190,143,245,0.25) 0%, rgba(167,138,248,0.15) 100%)",
                border: "1.5px solid rgba(255,255,255,0.15)",
              }}
              aria-hidden="true"
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylised "GL" letterform */}
                <path
                  d="M30 18H22C19.791 18 18 19.791 18 22V30C18 32.209 19.791 34 22 34H30V28H24V30H22V22H30V18Z"
                  fill="white"
                />
                <path d="M32 18H34V34H32V18Z" fill="white" />
              </svg>
            </div>

            <h3
              className="text-display-xl text-center text-white"
              style={{ maxWidth: "600px" }}
            >
              1 million Limited Supply
            </h3>
          </div>

          {/* Subtitle */}
          <p
            className="text-body-lg text-center"
            style={{ color: "rgba(255,255,255,0.60)", maxWidth: "480px" }}
          >
            Limited supply. Earned through contributions
          </p>

          {/* Progress bar + stats block */}
          <div className="flex w-full flex-col gap-4" style={{ maxWidth: "720px" }}>
            {/* Track */}
            <div className="h-5 w-full overflow-hidden rounded-full bg-gray-800">
              {/* Fill */}
              <div
                className="h-full rounded-full"
                style={{
                  width: `${PROGRESS_PERCENT}%`,
                  background:
                    "linear-gradient(to right, var(--color-purple-progress), var(--color-progress-orange))",
                }}
              />
            </div>

            {/* Three stats */}
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col items-start gap-0.5">
                <span
                  className="font-medium text-white"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  220k
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.50)",
                  }}
                >
                  Distributed
                </span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span
                  className="font-medium text-white"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  78%
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.50)",
                  }}
                >
                  Remaining
                </span>
              </div>

              <div className="flex flex-col items-end gap-0.5">
                <span
                  className="font-medium text-white"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  312
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.50)",
                  }}
                >
                  Avg GP per Contribution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
